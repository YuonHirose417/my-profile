import discord
import json
import ollama

# 設定ファイルの読み込み
def load_config():
    with open('config.json', 'r', encoding='utf-8') as file:
        return json.load(file)

config = load_config()

# Discordの設定
intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)

def load_persona():
    with open(config["persona_file"], "r", encoding="utf-8") as f:
        return f.read().strip()

persona_text = load_persona()  # `persona.txt` から性格設定を読み込む

#ollamaを使ってやりとりする
async def chat_with_ai(prompt):

    try:
        response = ollama.chat(
            model=config["ollama_model"], 
            messages=[
                {"role": "system", "content": persona_text},
                {"role": "user", "content": prompt}
            ]
        )
        reply = response['message']['content']
        return reply
    except Exception as e:
        print(f"❌ Ollamaのエラー: {e}")
        return "⚠️ AIの応答ができませんでした。"

# メッセージが送信されたときの処理
@client.event
async def on_message(message):

    # 自分自身のメッセージには反応しない
    if message.author == client.user:
        return

    # 特定のチャンネルではメンションなしでも応答する
    if message.channel.id in config["allowed_channels"]:
        should_respond = True
    else:
        # それ以外のチャンネルではメンションされた場合のみ応答
        should_respond = client.user.mentioned_in(message)

    if should_respond:
        async with message.channel.typing():  # 返信するまで「入力中」の表示
            response_text = await chat_with_ai(message.content)
        
        # メッセージが長すぎる場合は分割して送信
        for chunk in split_text(response_text):
            await message.channel.send(chunk)

# 長いテキストを分割する関数
def split_text(text, chunk_size=1500):
    return [text[i:i+chunk_size] for i in range(0, len(text), chunk_size)]

# ボットの起動
client.run(config["discord_key"])

