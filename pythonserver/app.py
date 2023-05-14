from flask import Flask, render_template

app = Flask(__name__, static_folder="/dist/zomapp/assets", template_folder="/dist/zomapp")

@app.route("/")
def hello():
    return render_template('/dist/zomapp/index.html')

print('Starting Flask!')

app.debug=True
app.run(host='0.0.0.0')