from flask import Blueprint, request
from flask_login import login_required

from app.models import db, Self_Affirmation

from app.forms.affirmation_form import AffirmationForm

affirmation_routes = Blueprint('affirmations', __name__)

# Create a new affirmation
@affirmation_routes.route('', methods=['POST'])
@login_required
def new_affirmation():
    # 1. Prepare form data for validation
    form = AffirmationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    notebook_id = request.json['notebook_id']

    # 2. Validate form data; if invalid return 400 bad request to user
    if not form.validate_on_submit():
        return {"message": "validation_errors", "data": form.errors}, 400

    # 3. If valid then extract useful data from form
    description = form.data['description']

    # 4. Create the notebook
    affirmation = Self_Affirmation(
        description=description, notebook_id=notebook_id)
       
    # 5. Add and commit the notebook
    db.session.add(affirmation)
    db.session.commit()

    # 6. Send 201 response to the user
    return {"message": "success", "data": affirmation.to_dict()}, 201



# update the affirmations

@affirmation_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_affirmation(id):
    # find affirmation by its id
    affirmation = Self_Affirmation.query.get(id)
    # grab the title, and description from the request, and update them
    affirmation.description = request.get_json()["description"]
    # commit the changes to the database
    db.session.commit()
    # Return a  message with the updated notebook and a 201 response
    return {"message": "success", "data": affirmation.to_dict()}, 201


@affirmation_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_affirmation(id):
    # find affirmation by its id
    deleted_affirmation = Self_Affirmation.query.get(id)
    # if it exists
    if deleted_affirmation:
        #delete it
        db.session.delete(deleted_affirmation)
        # update the database
        db.session.commit()
        #return a message confirming the delete
        return"why are you deleting this???"
        #otherwise let the user know the affirmation does not exist
    else:
        return "This does not exist"
     