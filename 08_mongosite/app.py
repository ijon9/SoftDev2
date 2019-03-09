import os

from flask import Flask, render_template, request,flash, session,url_for,redirect

from util import mango

app = Flask(__name__)

app.secret_key=os.urandom(32)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/ip", methods = ["GET", "POST"])
def getIp():
    print(request.form)
    ip = request.form["ip"]
    mango.connect(ip)
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.debug = True
    app.run()
