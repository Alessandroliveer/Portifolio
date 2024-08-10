from flask import Flask, render_template, send_from_directory, request, redirect, url_for

app = Flask(__name__)

# Rota para a página inicial
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/curriculo.pdf')
def serve_pdf():
    return send_from_directory('.', 'curriculo.pdf')

# Rota para servir o CSS
@app.route('/style.css')
def serve_css():
    return send_from_directory('.', 'style.css')

# Rota para servir o JS
@app.route('/main.js')
def serve_js():
    return send_from_directory('.', 'main.js')

# Rota para servir imagens
@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('Images', filename)

@app.route('/contact', methods=['POST'])
def enviar_mensagem():
    nome = request.form.get('nome')
    email = request.form.get('email')
    mensagem = request.form.get('mensagem')

    with open('mensagens.txt', 'a') as file:
        file.write(f"Nome: {nome}\nEmail: {email}\nMensagem: {mensagem}\n\n")

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
