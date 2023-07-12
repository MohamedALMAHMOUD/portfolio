from flask import Flask, render_template, request
from passeword import passeword

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def index():
  return render_template('index.html')

@app.route('/resultat', methods=['POST', 'GET'])
def result():
    output = request.form.to_dict()
    mdp = output['mdp']
    resultat = passeword(mdp)
    return render_template('index.html', resultat=resultat)

if __name__ == '__main__':
    app.run()
