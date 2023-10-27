(() => {


    // const arrayOfNums = [33.6, 12.34];
    const temperaturesInCelsius = [33.6, 12.34];

    // const ip = '123.123.123.123';
    const addressIp = '123.123.123.123'; // --> yo
    const serverIp = '123.123.123.123'; // --> profe

    // const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // const emails = people.map( u => u.email );
    const emails = users.map( user => user.email ); // yo
    const userEmails = users.map( user => user.email ); // profe

    const jump = false; // ---> yo 
    const canJump = false; // ---> Profe 
    const run = true; // --> yo
    const canRun = true; // --> yo
    // const noTieneItems = true;
    const hasItems = false;
    const loading = false; // --> yo
    const isloading = false; // --> profe


    // const start = new Date().getTime();
    const InitialTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // const end = new Date().getTime() - start;
    const finalTime = new Date().getTime() - InitialTime;


    // Funciones
    // function book() {
    //     throw new Error('Function not implemented.');
    // }

    function getBooks () {
        throw new Error('Function not implemented.');
    }


    // function BooksUrl( u: string) {
    //     throw new Error('Function not implemented.');
    // }
    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    

    // function areaCuadrado( s: number ) {
    //     throw new Error('Function not implemented.');
    // }
    function calculeSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    // function printJobIfJobIsActive() {
    //     throw new Error('Function not implemented.');
    // }
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();