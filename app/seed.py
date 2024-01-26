from setup import db, app
from faker import Faker
from models import User, Review, Recipe, Category

fake = Faker()

with app.app_context():

    User.query.delete()
    Category.query.delete()
    Review.query.delete()
    Recipe.query.delete()

    # Create users
    for i in range(10):
        user = User(email=fake.email(), password=fake.password())
        db.session.add(user)

    # Create categories
    categories = ['Bakery', 'Desserts', 'Italian', 'Mexican', 'Japanese']
    for category in categories:
        cat = Category(name=category)
        db.session.add(cat)

    # Create reviews
    for i in range(30):
        review = Review(comment=fake.text(100), rating=fake.random_int(min=1, max=5), user_id=fake.random_int(min=1, max=10), recipe_id=fake.random_int(min=1, max=20))
        db.session.add(review)


    # Create recipes
    for i in range(20):
        recipe = Recipe(title=fake.text(20), description=fake.text(100), ingredients=fake.text(500), preparation=fake.text(500), image_url=fake.image_url(), user_id=fake.random_int(min=1, max=10))
        db.session.add(recipe)
        category = db.session.get(Category, fake.random_int(min=1, max=5))
        if category is not None:
             recipe.categories.append(category)

        db.session.commit()