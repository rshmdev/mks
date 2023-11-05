"use client";

import { useAppContext } from "@/context/globalContext";
import ProductCard from "@/components/product-card";
import { GridProducts, Main, SectionProducts } from "@/styles/app";
import { Product } from "@/interfaces/cart";
import CardSkeleton from "@/components/card-skeleton";

export default function Home() {
  const { data, isLoading } = useAppContext();

  return (
    <Main>
      <SectionProducts>
        <GridProducts>
          {isLoading ? (
            Array(8)
            .fill(0)
            .map((_, index) => <CardSkeleton key={index} />)
          ) : (
            data.products.map((product: Product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          )}
        </GridProducts>
      </SectionProducts>
    </Main>
  );
}
