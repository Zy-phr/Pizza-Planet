app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();
  
    $scope.appetizers = [
      {
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
      },
      {
        name: 'Bruschetta',
        description: 'Grilled bread garlic, tomatoes, olive oil.',
        price: 4.95,
      }
    ];
    $scope.mains = [
      {
        name: 'Chicken Rossini',
        description: 'Chicken baked with ham, tomatoes, garlic and cheese.',
        price: 11.99
      },
      {
        name: 'Chicken Marsala',
        description: 'Sauteed mushrooms in a marsala sauce with side order spaghetti.',
        price: 11.99
      },
      {
        name: 'Ziti Fradiablo',
        description: ' Rigate Pasta with alfredo and touch of marinara. ',
        price: 9.99,
      }
    ];
      $scope.extras = [
      {
        name: 'Brooklyn',
        description: 'Pizza sauce, Pepperoni, Bell peppers, Onion, and Extra Cheese.',
        price: 15.99,  
      },
      {
        name: 'Supreme',
        description: ' Pepperoni, Ham, Hamburger, Sausage, Onions, Mushrooms, Bell Peppers, Black Olives ans Cheese.',
        price: 16.99,  
      },
      {
        name: 'Meat Lovers',
        description: 'Pizza sauce, Pepperoni, Ham , Hamburger, Sausage and Cheese.',
        price: 15.99,   
      }
    ];
  
  }]);