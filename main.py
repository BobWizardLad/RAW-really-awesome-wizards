from flask import Flask, render_template


app = Flask(__name__)
app.config.from_pyfile('settings/development_settings.cfg')


@app.route("/", methods=['GET'])
def index():
    return render_template('index.html')

@app.route("/game", methods=['GET'])
def game():
    return render_template('layout.html')


if __name__ == "__main__":
    app.run()