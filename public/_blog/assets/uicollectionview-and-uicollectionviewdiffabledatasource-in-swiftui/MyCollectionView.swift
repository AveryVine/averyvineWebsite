//
//  MyCollectionView.swift
//  SwiftUICollectionViewDemo
//
//  Created by Avery Vine on 2020-01-19.
//

import SwiftUI

struct MyCollectionView : UIViewRepresentable {
    func makeUIView(context: Context) -> UICollectionView {
        let collectionView = UICollectionView(frame: .zero,
                                              collectionViewLayout: UICollectionViewFlowLayout())
        collectionView.register(UICollectionViewCell.self, forCellWithReuseIdentifier: "myCell")
        let dataSource = UICollectionViewDiffableDataSource<MySection, MyModelObject>(collectionView: collectionView) { collectionView, indexPath, myModelObject in
            let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "myCell", for: indexPath)
            cell.backgroundColor = .red
            // ...
            // Do whatever customization you want with your cell here!
            // ...
            return cell
        }
        populate(dataSource: dataSource)
        context.coordinator.dataSource = dataSource
        return collectionView
    }

    func updateUIView(_ uiView: UICollectionView, context: Context) {
        let dataSource = context.coordinator.dataSource
        // ...
        // Do whatever updates you need to here!
        // e.g. populate(dataSource: dataSource)
        // ...
    }
    
    func makeCoordinator() -> MyCoordinator {
        MyCoordinator()
    }

    func populate(dataSource: UICollectionViewDiffableDataSource<MySection, MyModelObject>) {
        var snapshot = NSDiffableDataSourceSnapshot<MySection, MyModelObject>()
        snapshot.appendSections([.main])
        snapshot.appendItems([MyModelObject(), MyModelObject(), MyModelObject()])
        dataSource.apply(snapshot)
    }
}

enum MySection {
    case main
}

class MyModelObject: Hashable {
    let id = UUID()

    func hash(into hasher: inout Hasher) {
        hasher.combine(id)
    }

    static func == (lhs: MyModelObject, rhs: MyModelObject) -> Bool {
        return lhs.id == rhs.id
    }
}

class MyCoordinator {
    var dataSource: UICollectionViewDiffableDataSource<MySection, MyModelObject>?
}

struct MyCollectionView_Previews: PreviewProvider {
    static var previews: some View {
        MyCollectionView()
    }
}
