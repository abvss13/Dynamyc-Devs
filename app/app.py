from flask import Flask, jsonify, request, abort, render_template
from setup import app, db, api
from models import User, Recipe, Review, Category

@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")

@app.route('/recipes', methods=['GET'])
def get_recipes():
    recipes = Recipe.query.all()
    recipe_list = [{'id': recipe.id, 'title': recipe.title, 'description': recipe.description, 'ingredients': recipe.ingredients, 'preparation': recipe.preparation, 'image_url': recipe.image_url } for recipe in recipes]
    return jsonify(recipe_list)

@app.route('/recipes/<int:recipe_id>', methods=['GET', 'PATCH', 'DELETE'])
def recipe_detail(recipe_id):
    recipe = Recipe.query.get(recipe_id)

    if not recipe:
        abort(404, description=f"Recipe with ID {recipe_id} not found")

    if request.method == 'GET':
        return jsonify ({
            'id': recipe.id,
            'title': recipe.title,
            'description': recipe.description,
            'ingredients': recipe.ingredients,
            'preparation': recipe.preparation,
            'image_url': recipe.image_url
        })

    elif request.method == 'PATCH':
        data = request.json
        
        if 'title' in data:
            recipe.title = data['title']   
        if 'description' in data:
            recipe.description = data['description'] 
        if 'ingredients' in data:
            recipe.ingredients = data['ingredients'] 
        if 'preparation' in data:
            recipe.preparation = data['preparation']
        if 'image_url' in data:
            recipe.image_url = data['image_url']

        db.session.commit()
        return jsonify (message='Recipe updated successfully')

    elif request.method == 'DELETE':
        db.session.delete(recipe)
        db.session.commit()
        return jsonify(message='Recipe deleted successfully')

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_list = [{'id': user.id, 'email': user.email, 'password': user.password} for user in users]
    return jsonify(user_list)

@app.route('/recipe_categories', methods=['GET'])
def get_recipe_categories():
    categories = Category.query.all()
    category_list = [{'id': category.id, 'name': category.name } for category in categories]
    return jsonify(category_list)

@app.route('/recipes/<int:recipe_id>/reviews', methods=['GET'])
def get_recipe_reviews(recipe_id):
    recipe = Recipe.query.get(recipe_id)
    
    if not recipe:
        abort(404, description=f"Recipe with ID {recipe_id} not found")

    reviews = Review.query.filter_by(recipe_id=recipe_id).all()
    
    review_list = [{'id': review.id, 'user_id': review.user_id, 'text': review.comment } for review in reviews]
    
    return jsonify(review_list)
    
if __name__ == '__main__':
    app.run()