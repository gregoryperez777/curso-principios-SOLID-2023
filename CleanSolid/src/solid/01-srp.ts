(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class ProductService {

        private httpAdapter: Object;

        getProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {

        private masterEmail: string = 'gregory@gmail.com';

        sendEmail( emailList: string[], template: 'to-client' | 'to-admins' ) {
            console.log('Enviando correo a los clientes');
        }

    }

    class CartBloc {

        private itemsInCart: Object[] = [];

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    // BLoC Business Logic Component
    // Basicamente un patrón de diseño https://bloclibrary.dev/#/
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        private productService: ProductService;
        private mailer: Mailer;

        constructor (productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['carmen@gmail.com'], 'to-client');
        }
    }
    
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();