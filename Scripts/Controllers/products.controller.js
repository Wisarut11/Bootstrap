angular.module("labb3Bootstrap")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Products";
            $scope.newProduct = {};

            $scope.addProduct = function () {
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};
                $scope.saveProducts();
                $("#newProductModal").modal("hide");                    // Göm " add products " (efter har lagt till)

            }

            $scope.removeProduct = function (index) {
                $scope.products.splice(index, 1);                   // Tabort element 
            };
        }
    ]);