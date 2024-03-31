import ProductPreviewCard from "@/components/ProductPreviewCard"

export type ProductImagePath = {
  imagePath: {
    desktop: string
    mobile: string
  }
}

export interface Product extends ProductImagePath {
  id: number
  group: "Perfume" | string
  name: string
  description: string
  price: {
    base: number
    reduced?: number
  }
}

const products: Product[] = [
  {
    id: 1,
    group: "Perfume",
    name: "Gabrielle Essence Eau De Parfum",
    description:
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    price: {
      base: 169.99,
      reduced: 149.99,
    },
    imagePath: {
      desktop: "/assets/images/image-product-desktop.jpg",
      mobile: "/assets/images/image-product-mobile.jpg",
    },
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      {products.map((product, index) => (
        <ProductPreviewCard
          id={product.id}
          group={product.group}
          name={product.name}
          description={product.description}
          price={product.price}
          imagePath={product.imagePath}
          key={index}
        />
      ))}
    </main>
  )
}
