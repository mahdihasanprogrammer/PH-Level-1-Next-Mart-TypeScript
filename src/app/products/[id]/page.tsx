import Image from "next/image";
import { notFound } from "next/navigation";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productsData } from "@/data/productsData";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = productsData.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <ProtectedRoute>
      <main className="container py-16 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl border">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold">{product.title}</h1>

            <div className="flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" />

              <span>{product.rating}</span>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="text-4xl font-bold">${product.price}</div>

            <p>
              Stock:
              <span className="font-semibold ml-2">{product.stock}</span>
            </p>

            <Button size="lg">
              <ShoppingCart className="mr-2 size-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
