import type { Product } from "@/app/page"
import { serif } from "@/fonts"
import CartIcon from "@/components/icons/CartIcon"
import ProductImage from "@/components/ProductImage"

export default function ProductPreviewCard({
  id,
  group,
  name,
  description,
  price,
  imagePath,
}: Product) {
  return (
    <article className="mobile:flex-row flex max-w-[600px] flex-col overflow-hidden rounded-lg bg-neutral-white shadow-lg">
      <ProductImage imagePath={imagePath} />
      <section className="basis-1/2 p-8">
        <header>
          <h1 className="text-xs uppercase tracking-[calc(41_*_0.01em)] text-neutral-dark-grayish-blue">
            {group}
          </h1>
          <h2
            className={`${serif.className} mt-5 text-[32px] leading-none text-neutral-very-dark-blue`}
          >
            {name}
          </h2>
        </header>
        <p className="mt-6 leading-[165%] text-neutral-dark-grayish-blue">
          {description}
        </p>
        <div className="mt-[30px] flex items-center gap-5">
          {price.reduced ? (
            <>
              <span
                className={`${serif.className} text-primary-light-cyan text-[32px] leading-none`}
              >
                ${price.reduced}
              </span>
              <span className="text-[13px] text-neutral-dark-grayish-blue line-through">
                ${price.base}
              </span>
            </>
          ) : (
            <span
              className={`${serif.className} text-primary-light-cyan text-[32px] leading-none`}
            >
              ${price.base}
            </span>
          )}
        </div>
        <button className="bg-primary-light-cyan mt-[30px] flex w-full items-center justify-center gap-[10px] rounded-lg py-4 font-bold leading-none text-neutral-white transition-colors hover:bg-primary-dark-cyan">
          <CartIcon /> Add to Cart
        </button>
      </section>
    </article>
  )
}
