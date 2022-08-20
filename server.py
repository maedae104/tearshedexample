from flask import (Flask, redirect, render_template, request,
                    flash, session)
from jinja2 import StrictUndefined

app = Flask(__name__   )
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


@app.route('/')
def show_homepage():
    """Show the application's homepage."""

    return render_template('homepage.html')


# @app.route('/enter')
# def show_enterpage():
#     """Show the application's enter."""

#     return render_template('main.html')

@app.route('/gallery')
def show_gallery():
    """Show the application's gallery."""

    return render_template('gallery.html')


@app.route('/shop')
def show_shop():
    """Show the application's shop."""

    return render_template('shop.html')


@app.route('/about')
def show_about():
    """Show the application's about."""

    return render_template('about.html')

@app.route('/grief')
def show_grief():
    """Show grief."""

    return render_template('grief.html')

if __name__ == "__main__":
    
    app.run(host="0.0.0.0", debug=True)