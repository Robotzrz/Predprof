from flask import Flask, render_template


app = Flask(__name__)

@app.route("/admin")
def admin():
  return render_template("admin.html")



@app.route("/reg")
def reg():
  return render_template("reg.html")



if __name__ == "__main__":
  app.run(debug=True, host="0.0.0.0", port=80)
