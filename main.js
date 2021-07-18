const menu = {
    _courses : {
      appetizers : [],
      mains : [],
      desserts : [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name : dishName,
        price : dishPrice,
      }
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this.courses[courseName];
      const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price+main.price+dessert.price;
      return `You ordered for ${appetizer.name}, ${main.name}, ${dessert.name} and your total cost is ${totalPrice}`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'soup', 15);
  menu.addDishToCourse('appetizers', 'salad', 10);
  menu.addDishToCourse('appetizers', 'smirnoff ice', 15);
  
  menu.addDishToCourse('mains', 'rice and chicken', 25);
  menu.addDishToCourse('mains', 'jollof rice and chicken', 30);
  menu.addDishToCourse('mains', 'pizza and malt', 40);
  
  menu.addDishToCourse('desserts', 'ice cream', 15);
  menu.addDishToCourse('desserts', 'chocolate cake', 20);
  menu.addDishToCourse('desserts', 'mixed fruits', 20);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);