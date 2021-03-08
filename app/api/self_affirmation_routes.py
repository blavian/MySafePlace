from flask import Blueprint, request
from flask_login import login_required, current_user

from app.models import db, Self_Affirmation

from app.forms.affirmation_form import AffirmationForm

affirmation_routes = Blueprint('affirmation', __name__)

# Create a new affirmation


@affirmation_routes.route('', methods=['POST'])
@login_required
def new_affirmation():
    # 1. Get user from session
    user = current_user

    # 2. Prepare form data for validation
    form = AffirmationForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # 3. Validate form data; if invalid return 400 bad request to user
    if not form.validate_on_submit():
        return {"message": "validation_errors", "data": form.errors}, 400

    # 4. If valid then extract useful data from form
    title = form.data['title']
    description = form.data['description']
    date = form.data['date']

    # 5. Create the notebook
    affirmation = Self_Affirmation(user_id=user.id, title=title,description=description,date=date)

    # 6. Add and commit the notebook
    db.session.add(affirmation)
    db.session.commit()

    # 7. Send 201 response to the user
    return {"message": "success", "data": affirmation.to_dict()}, 201

