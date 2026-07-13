import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManageProductsPage() {
  return (
    <ProtectedRoute>
      <div className="container py-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Manage Products</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex h-96 items-center justify-center rounded-lg border border-dashed">
              <p className="text-muted-foreground text-lg">
                Product management table will be here.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
