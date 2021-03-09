from flask import Blueprint, request
from flask_login import login_required, current_user

from app.models import db, Notebook
from app.forms.notebook_form import NotebookForm

notebook_routes = Blueprint('notebooks', __name__)

# Create a new Notebook


@notebook_routes.route('', methods=['POST'])
@login_required
def new_notebook():
    # 1. Get user from session
    user = current_user

    # 2. Prepare form data for validation
    form = NotebookForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # 3. Validate form data; if invalid return 400 bad request to user
    if not form.validate_on_submit():
        return {"message": "validation_errors", "data": form.errors}, 400

    # 4. If valid then extract useful data from form
    title = form.data['title']

    # 5. Create the notebook
    notebook = Notebook(user_id=user.id, title=title)

    # 6. Add and commit the notebook
    db.session.add(notebook)
    db.session.commit()

    # 7. Send 201 response to the user
    return {"message": "success", "data": notebook.to_dict()}, 201
# Read all of the current user's notebooks


@notebook_routes.route('')
@login_required
def get_notebooks():
    # get the user from the session
    user = current_user
    #  finds all of the user's notebooks based off of their userId
    user_notebooks = Notebook.query.filter(Notebook.user_id == user.id)
    # return list of all the notebooks
    return {"message": "success", "data": [notebook.to_dict() for notebook in user_notebooks]}, 200

# Update a user's notebook
@notebook_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_notebook(id):
    # find notebook by its id
    notebook = Notebook.query.get(id)
    # grab the title from the request, and update the title to what the user writes
    notebook.title = request.get_json()["title"]
    # commit the changes to the database
    db.session.commit()
    # Return a  message with the updated notebook and a 201 response
    return {"message": "success", "data": notebook.to_dict()}, 201
   

# Delete a notebook
@notebook_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_notebook(id):
# find notebook by its id
    notebook = Notebook.query.get(id)
    if notebook:
        # delete the notebook
        db.session.delete(notebook)
    # update the database
        db.session.commit()
    # return a message saying notebook was deleted successfully
        return {"message": "The notebook has been successfully deleted"}, 200
    else:
        return {"message": "The notebook with that id does not exist."}, 404


@notebook_routes.route('/<int:id>')
@login_required
def get_notebook(id):
    # get the user from the session
    user = current_user
    #  finds all of the user's notebooks based off of their userId
    notebook = Notebook.query.get(id)
    # return list of one notebook
    return notebook.to_dict()
