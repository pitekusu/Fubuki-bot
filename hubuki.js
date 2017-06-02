var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


const Eris = require("eris");
const Eris2 = require("eris");

var bot = new Eris("MzA5MDAxNjU1MzA1ODk1OTQ2.C-pMow.LZ4zuAptF1yUPWLIR1bp_XtnoPo");
var nenohi = new Eris2("MzA5MzUyNjI5Mzc1MzM2NDQ5.C-w31w.hwTbkv8cgEIsHmDc6UqnK6P6z8M")
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("voiceChannelJoin", (member, newChannel) => {
    // 誰かがボイスチャンネルに入った時に行う処理
    let ch = newChannel.guild.defaultChannel;
    ch.createMessage(member.username + "司令官が " + newChannel.name + "鎮守府に着任しました！");
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
    // 誰かがボイスチャンネルから離れた時に行う処理です。
    let ch = oldChannel.guild.defaultChannel;
    ch.createMessage(member.username + "司令官が" + oldChannel.name + "鎮守府から離任しました・・・");
});

bot.on("voiceChannelSwitch", (member, newChannel, oldChannel) => {
    // 誰かがボイスチャンネルを移動した時に行う処理です。
    let ch = oldChannel.guild.defaultChannel;
    ch.createMessage(member.username + "司令官が" + oldChannel.name + "鎮守府から " + newChannel.name + "鎮守府に移籍されました！");
});


bot.on("messageCreate", (msg) => {
    var str = msg.content;
    var Serihu = new Array(
        { num: "0", message: "お疲れ様です、吹雪です！ はいっ、頑張ります！" },
        { num: "1", message: "はいっ！ 準備完了です、司令官！" },
        { num: "2", message: "出撃ですか？ 頑張ります！" },
        { num: "3", message: "なーにぃ、睦月ちゃん。えっ、えぇっ……し、司令官……！？" },
        { num: "4", message: "特型駆逐艦、吹雪型一番艦、吹雪！いきます！司令官！見ていてください！" },
        { num: "5", message: "あの、あのぉ……私、司令官のこと……大す……い、いえっ信頼しています！ はい！" },
        { num: "6", message: "いつもお疲れさまです、司令官！ あの、これ、吹雪が作りました……！ もしよかったら召し上がってください……ど、どうぞ！" },
        { num: "7", message: "第十一駆逐隊、吹雪！ 出撃します！" },
        { num: "8", message: "出撃です！ 皆、準備はいい？" },
        { num: "9", message: "撃ち方始め！ いっけぇー！" },
        { num: "10", message: "追撃戦に移行します。私に続いてください！" },
        { num: "11", message: "わ、私が皆を護るんだから！" },
        { num: "12", message: "お願い、当たってください！" },
        { num: "13", message: "そんなっ！ ダメですぅ！" },
        { num: "14", message: "私、やりました！ 司令官のおかげです！" },
        { num: "15", message: "作戦完了です！ お疲れ様です！" },
        { num: "16", message: "ありがとうございます、司令官。これでまた、がんばれます！" },
        { num: "17", message: "この装備…これなら、もっと頑張れます！" },
        { num: "18", message: "ちょっとだけ、お休みします。" },
        { num: "19", message: "すみません司令官……おやすみなさい。" },
        { num: "20", message: "嫌……！ いやだよぉ……。" },
        { num: "21", message: "主砲……よし。魚雷発射管……よし。機関……大丈夫！ ふぅ、あとは……ああ、そうだ、あの辺も確認しておこう。えっと……。" }
    );
    if (msg.author.id != "309001655305895946" && str.match(/吹雪/) || str.match(/ブッキー/)) {
        var rand = Math.floor(Math.random() * 22);
        var Serihustr = Serihu[rand]["message"]
        bot.createMessage(msg.channel.id, Serihustr);
    }
});


var ListMessage = new Array(
    { time: "0:0:0", message: "司令官、日付が変わりました。本日も私、吹雪が時刻をお知らせいたしますね", audio: "FubukiKai2-00.ogx" },
    { time: "1:0:0", message: "マルヒトマルマルです、はい！", audio: "FubukiKai2-01.ogx" },
    { time: "2:0:0", message: "マルフタマルマルです！ 司令官、この時間は、鎮守府も静かですね", audio: "FubukiKai2-02.ogx" },
    { time: "3:0:0", message: "マルサンマルマルです！ え、私？　あ、はい、大丈夫です！ 眠くなんかないです！", audio: "FubukiKai2-03.ogx" },
    { time: "4:0:0", message: "マルヨン……マルマルです……んあっ……！？　ちがっ、違うんです！ はい！ 吹雪、バッチリ元気です！", audio: "FubukiKai2-04.ogx" },
    { time: "5:0:0", message: "マルゴーマルマルです！ 司令官、朝この時間は気持ちいいですね！ はい！", audio: "FubukiKai2-05.ogx" },
    { time: "6:0:0", message: "マルロクマルマルです！ 総員起こし、ですよね！掛けます！艦隊、総員起こし！", audio: "FubukiKai2-06.ogx" },
    { time: "7:0:0", message: "マルナナマルマルです！ 司令官、朝食、こちらにご用意しました。和朝食です。お味噌汁は、今朝はじゃがいもです！", audio: "FubukiKai2-07.ogx" },
    { time: "8:0:0", message: "マルハチマルマルです！ よし、これで洗い物はオッケイっと……はい！司令官、吹雪、出撃準備完了です！", audio: "FubukiKai2-08.ogx" },
    { time: "9:0:0", message: "マルキューマルマルです！ 白雪ちゃん、初雪ちゃん、準備はいい？　司令官、第十一駆逐隊、いつでも出撃できます！", audio: "FubukiKai2-09.ogx" },
    { time: "10:0:0", message: "ヒトマルマルマルです！ 赤城さん……いつ見ても素敵です！ いつか……私も赤城さんの随伴艦として出撃を……あっ！ 夢です！ 夢！", audio: "FubukiKai2-10.ogx" },
    { time: "11:0:0", message: "ヒトヒトマルマルです！ もうすぐお昼ですね。今日のお昼はどうしましょう……司令官、やっぱりカレーでしょうか？", audio: "FubukiKai2-11.ogx" },
    { time: "12:0:0", message: "ヒトフタマルマルです！ 司令官、吹雪もカレーを作ってみました！ どうでしょう？　人参と玉葱がですね……ああっそうなんです！ 隠し味はですねぇ……あっ！ おかわりあります！", audio: "FubukiKai2-12.ogx" },
    { time: "13:0:0", message: "ヒトサンマルマルです！ 午後の作戦展開はどうしましょう？　出撃艦隊の編成は……あっ、司令官、お疲れですか？", audio: "FubukiKai2-13.ogx" },
    { time: "14:0:0", message: "ヒトヨンマルマルです！ あっ、古鷹さん、どうしたんですか？　青葉さん？　んーん、見てないです……あ、はい！", audio: "FubukiKai2-14.ogx" },
    { time: "15:0:0", message: "ヒトゴーマルマルです！ はい、古鷹先輩はとてもよくしてくれるんです。優しい方です。あ！ 青葉さんだ！ 青葉さーん！", audio: "FubukiKai2-15.ogx" },
    { time: "16:0:0", message: "ヒトロクマルマルです！ 青葉さん、さっき古鷹さんが探してましたよ？　え？　いいんですか？　あれ、行っちゃった……えっと……", audio: "FubukiKai2-16.ogx" },
    { time: "17:0:0", message: "ヒトナナマルマルです！ 司令官、夕日が綺麗ですね。そろそろ、お夕食の準備をしないと……え、夜は御馳走してくれるんですか？", audio: "FubukiKai2-17.ogx" },
    { time: "18:0:0", message: "ヒトハチマルマル。司令官と外食だなんて、緊張してしまいます……えと、ナイフとフォーク……外側から使うんだよね？", audio: "FubukiKai2-18.ogx" },
    { time: "19:0:0", message: "ヒトキュウマルマルです！ 司令官、このコンソメスープ、とぉっても美味しいです！ このサラダも……洋食ってオシャレですね！", audio: "FubukiKai2-19.ogx" },
    { time: "20:0:0", message: "フタマルマルマルです！ お腹いっぱいです、司令官！ あ、これはいっぱい働いてお返ししないと。はい！ 吹雪、もっと頑張ります！", audio: "FubukiKai2-20.ogx" },
    { time: "21:0:0", message: "フタヒトマルマルです！ あ、由良さんだ！ 素敵ですよね、由良さん。白雪ちゃん達と一緒にお世話になったんです、はい！", audio: "FubukiKai2-21.ogx" },
    { time: "22:0:0", message: "フタフタマルマル……え、夢ですか？　強くなって、皆を護ることが出来て、平和になったら…ずーっとひなたぼっこをしてたいです", audio: "FubukiKai2-22.ogx" },
    { time: "23:0:0", message: "フタサンマルマルです。司令官の夢はなんですか？　うん……わぁ、そうなんだ！ 良かった♪　私もおんなじです、はい！", audio: "FubukiKai2-23.ogx" }
);


function MessageTimer() {
    var myTime = new Date();
    var myHours = myTime.getHours();
    var myMinutes = myTime.getMinutes();
    var mySeconds = myTime.getSeconds();
    var strTime = myHours + ":" + myMinutes + ":" + mySeconds;
    var defaulttextCh = "308970029804945408";
    var defaultvoiceCh = "308970029804945409";

    for (var i = 0; i < ListMessage.length; i++) {
        if (strTime == ListMessage[i]["time"]) {
            var filename = ListMessage[i]["audio"];
            var message = ListMessage[i]["message"];
            bot.joinVoiceChannel(defaultvoiceCh).catch((err) => {
                bot.createMessage(defaultvoiceCh, "Error joining voice channel: " + err.message);
            }).then((connection) => {
                connection.play(filename);
                bot.createMessage(defaulttextCh, message);
                connection.once("end", () => {
                });
            });
        }
    }
}


var tmrTimer = setInterval(function () { MessageTimer(); }, 1000);
var mode = "temp"; //モード変数を初期化
var voice_flag = 2;

var context_flag = "0";
bot.on("messageCreate", (msg) => {
    var str = msg.content;
    if (str.match(/<@309001655305895946>/)) {
        var Temp = str.replace(/<@309001655305895946>/g, "");
        var Replacestr = Temp.replace(/ /g, "");
        var encstr = encodeURIComponent(Replacestr);
        var rand2 = Math.floor(Math.random() * 4); //4つの人工知能からランダム選択
        var request = require('request');
        
        if (Replacestr.match(/静かに/)){
            bot.createMessage(msg.channel.id, "すみませんでした・・・黙ります。");
            voice_flag = 0;
        }else if (Replacestr.match(/喋って/)){
            bot.createMessage(msg.channel.id, "はい！吹雪、喋りますっ！");
            voice_flag = 1;
        }
        if (mode == "srtr") { //しりとり中の場合はしりとり人工知能を選択
            rand2 = 2;
        }
        if (rand2 == 0) { //ユーザーローカル社の人工知能
            var URLstr = "https://chatbot-api.userlocal.jp/api/chat?key=a4fd4de3d10b7c704017&message=" + encstr;
            request(URLstr, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var data = JSON.parse(body);
                    bot.createMessage(msg.channel.id, data.result);
                    VoiceChat(data.result);
                } else {
                    console.log('error: ' + response.statusCode);
                }
            });
        } else if (rand2 == 1) { //リクルート社の人工知能
            var options = {
                uri: "https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded",
                },
                form: {
                    "apikey": "6d72kF1TKnqonfm6VPKvMVVyMh9KT6rr",
                    "query": Replacestr
                }
            };
            request.post(options, function (error, response, body) {
                var data = JSON.parse(body);
                if (data.status != "2000") {
                    bot.createMessage(msg.channel.id, data.results[0].reply + "（リクルート）");
                    VoiceChat(data.results[0].reply);
                } else {
                    bot.createMessage(msg.channel.id, "ごめんなさい、よく聞こえませんでした。");
                }

            });
        } else if (rand2 == 2) { //NTTドコモ社の人工知能
            var apikey_D = "4b6a62756e67322f385774655570396962644e594a676249754b736a6e455a477065594a3865764b734f2e";
            var request = require('request');
            if (context_flag == "0") { //初回の会話のみこの処理
                var options = {
                    uri: "https://api.apigw.smt.docomo.ne.jp/dialogue/v1/dialogue?APIKEY=" + apikey_D,
                    headers: {
                        "Content-type": "application/json",
                    },
                    json: {
                        "sex": "男",
                        "utt": Replacestr,
                        "nickname": msg.author.username
                    }
                };
                request.post(options, function (error, response, body) {
                    bot.createMessage(msg.channel.id, body.utt);
                    VoiceChat(body.utt);
                    context = body.context;
                    mode = body.mode;
                    console.log("初回のモード：" + mode);
                });
                context_flag = "1";
            } else if (context_flag == "1") { //次回以降の会話の処理
                var options = {
                    uri: "https://api.apigw.smt.docomo.ne.jp/dialogue/v1/dialogue?APIKEY=" + apikey_D,
                    headers: {
                        "Content-type": "application/json",
                    },
                    json: {
                        "utt": Replacestr,
                        "nickname": msg.author.username,
                        "mode": mode, //しりとりの場合はsrtrになる
                        "context": context //初回のcontextを代入
                    }
                };
                request.post(options, function (error, response, body) {
                    bot.createMessage(msg.channel.id, body.utt);
                    VoiceChat(body.utt);
                    mode = body.mode; //モードを書き換える
                    console.log("初回以降のモード：" + mode);
                });
            }
        }
        else if (rand2 == 3) { //コトゴト社の人工知能
            var apikey_K = "86aef263113e5e8d110d049a5d56b624";
            var mail = "pitekusu@gmail.com";
            var passwd = "moyashi3104";
            var persona_num = "1" // 「0:ノーマル」,「1:ツンデレ(女)」,「2:ツンデレ(男)」,「3:神」
            var URLstr = "https://www.cotogoto.ai/webapi/noby.json?&appkey=" + apikey_K + "&mail=" + mail + "&pass=" + passwd + "&persona=" + persona_num + "&text=" + encstr;
            request(URLstr, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var data = JSON.parse(body);
                    bot.createMessage(msg.channel.id, data.text);
                    VoiceChat(data.text);
                } else {
                    console.log('error: ' + response.statusCode);
                }
            });
        }
    }
});

bot.on("messageCreate", (msg) => {
    var str = msg.content;
    var URLstr = "http://api.openweathermap.org/data/2.5/forecast/daily/?units=metric&id=1850147&cnt=2&APPID=d73bd6f86770aab15580681cfa8a227b";
    if (msg.author.id != "309001655305895946" && str.match(/天気/)) {
        var request = require('request');
        var tenki = new Array(
            { eng: "01", jp: "快晴" },
            { eng: "02", jp: "ちょっと曇り" },
            { eng: "03", jp: "曇り" },
            { eng: "04", jp: "とっても曇り" },
            { eng: "09", jp: "小雨" },
            { eng: "10", jp: "雨" },
            { eng: "11", jp: "雷雨" },
            { eng: "13", jp: "雪" },
            { eng: "50", jp: "霧" }
        );
        request(URLstr, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                var tempMax_today = Math.floor(Number(data.list[0].temp.max) * 10) / 10 + " ℃";   //今日の最高気温
                var tempMin_today = Math.floor(Number(data.list[0].temp.min) * 10) / 10 + "℃";   ///今日の最低気温
                var tempMax_tomorrow = Math.floor(Number(data.list[1].temp.max) * 10) / 10 + " ℃";   //明日の最高気温
                var tempMin_tomorrow = Math.floor(Number(data.list[1].temp.min) * 10) / 10 + "℃";   //明日の最低気温
                var weather_today = data.list[0].weather[0].icon; //今日の天気
                var weather_tomorrow = data.list[1].weather[0].icon; //明日の天気
                var weather_today_rep = weather_today.replace(/d|n/g, "");
                var weather_tomorrow_rep = weather_tomorrow.replace(/d|n/g, "");
                for (var i = 0; i < tenki.length; i++) {
                    if (weather_today_rep == tenki[i]["eng"]) {
                        bot.createMessage(msg.channel.id, "今日の東京の天気は、" + tenki[i]["jp"] + "です！最高気温は" + tempMax_today + "、最低気温は" + tempMin_today + "です！");
                    }
                    if (weather_tomorrow_rep == tenki[i]["eng"]) {
                        bot.createMessage(msg.channel.id, "明日の東京の天気は、" + tenki[i]["jp"] + "です！最高気温は" + tempMax_tomorrow + "、最低気温は" + tempMin_tomorrow + "で す！");
                    }
                }
            } else {
                console.log('error: ' + response.statusCode);
            }
        });
    }
});

nenohi.on("messageCreate", (msg) => {
    var str = msg.content;
    if (str.match(/何の日/) || str.match(/なんの/)) {
        var filename = "Nenohi.wav"; // Get the filename
        nenohi.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => { // Join the user's voice channel
            nenohi.createMessage(msg.channel.id, "Error joining voice channel: " + err.message); // Notify the user if there is an error
            console.log(err); // Log the error
        }).then((connection) => {
            if (connection.playing) { // Stop playing if the connection is playing something
                connection.stopPlaying();
            }
            connection.play(filename); // Play the file and notify the user
            nenohi.createMessage(msg.channel.id, "子日だよ！");
            connection.once("end", () => {
            });
        });
    }
});

nenohi.on("messageCreate", (msg) => {
    var str = msg.content;
    var nk = new Array(
        { name: "nk1.mp3" },
        { name: "nk2.mp3" },
        { name: "nk3.mp3" },
        { name: "nk4.mp3" },
        { name: "kongyo.mp3" }
    );
    if (str.match(/コンギョ/)) {
        var rand = Math.floor(Math.random() * 5);
        var filename = nk[rand]["name"]; // Get the filename
        nenohi.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => { // Join the user's voice channel
            nenohi.createMessage(msg.channel.id, "Error joining voice channel: " + err.message); // Notify the user if there is an error
            console.log(err); // Log the error
        }).then((connection) => {
            if (connection.playing) { // Stop playing if the connection is playing something
                connection.stopPlaying();
            }
            connection.play(filename); // Play the file and notify the user
            nenohi.createMessage(msg.channel.id, "공격전이다！");
            connection.once("end", () => {
            });
        });
    }
});

nenohi.on("messageCreate", (msg) => {
    var str = msg.content;
    if (str.match(/やったぜ/)) {
        var filename = "yattaze.mp3"; // Get the filename
        nenohi.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => { // Join the user's voice channel
            nenohi.createMessage(msg.channel.id, "Error joining voice channel: " + err.message); // Notify the user if there is an error
            console.log(err); // Log the error
        }).then((connection) => {
            if (connection.playing) { // Stop playing if the connection is playing something
                connection.stopPlaying();
            }
            connection.play(filename); // Play the file and notify the user
            nenohi.createMessage(msg.channel.id, "投稿者：変態糞土方");
            connection.once("end", () => {
            });
        });
    }
});

nenohi.on("messageCreate", (msg) => {
    var str = msg.content;
    var aum = new Array(
        { name: "ningen.mp3" },
        { name: "daisinsei.mp3" },
        { name: "kyokugen.mp3" },
        { name: "susume.mp3" },
        { name: "habatake.mp3" },
        { name: "ganesya.mp3" },
        { name: "keppaku.mp3" },
        { name: "maoharau.mp3" },
        { name: "march1.mp3" },
        { name: "zinriki.wma" }
    );
    if (msg.author.id != "309352629375336449" && str.match(/解脱/)) {
        var rand4 = Math.floor(Math.random() * 10);
        var filename = aum[rand4]["name"]; // Get the filename
        nenohi.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => { // Join the user's voice channel
            nenohi.createMessage(msg.channel.id, "Error joining voice channel: " + err.message); // Notify the user if there is an error
            console.log(err); // Log the error
        }).then((connection) => {
            if (connection.playing) { // Stop playing if the connection is playing something
                connection.stopPlaying();
            }
            connection.play(filename); // Play the file and notify the user
            nenohi.createMessage(msg.channel.id, "ポアするぞ");
            connection.once("end", () => {
            });
        });
    }
});


nenohi.on("messageCreate", (msg) => {
    var apikey_D = "4b6a62756e67322f385774655570396962644e594a676249754b736a6e455a477065594a3865764b734f2e";
    var str = msg.content;
    if (str.match(/<@309352629375336449>/)) {
        var Temp = str.replace(/<@309352629375336449>/g, "");
        var Replacestr = Temp.replace(/ /g, "");
        var question = encodeURIComponent(Replacestr);
        var request = require('request');
        var options = {
            uri: "https://api.apigw.smt.docomo.ne.jp/knowledgeQA/v1/ask?APIKEY=" + apikey_D + "&q=" + question
        };
        request.get(options, function (error, response, body) {
            var data = JSON.parse(body);
            var rand3 = Math.floor(Math.random() * 3);
            if (data.code == "E020010") {
                var nenohi_S = new Array(
                    { serihu: "もっと言葉にリズムがほしいなあ！" },
                    { serihu: "There is no sense of rhythm in words." },
                    { serihu: "शब्द के लिए ताल की कोई समझ नहीं है।" }
                );
                nenohi.createMessage(msg.channel.id, nenohi_S[rand3]["serihu"]);
            } else {
                nenohi.createMessage(msg.channel.id, "やっほい！　" + data.answers[0].answerText + "　だよ！");
                nenohi.createMessage(msg.channel.id, "詳しくは、このURLを見てね！　" + data.answers[0].linkUrl);
            }
        });
    }
});



function VoiceChat(VoiceText) {
    if (voice_flag == 1) {
        var querystring = require('querystring')
        var https = require('https')
        var fs = require('fs')
        var ws = fs.createWriteStream("voice.ogg");
        var EmotionArray = new Array(
            { name: "happiness" },
            { name: "anger" },
            { name: "sadness" }
        );
        var rand = Math.floor(Math.random() * 3);
        var emotion = EmotionArray[rand]["name"];
        var rand2 = Math.floor(Math.random() * 2);
        var emotion_level = rand2 + 1;

        postData = {
            "text": VoiceText,
            "speaker": "hikari",
            "emotion": emotion,
            "emotion_level": emotion_level,
            "format": "ogg"
        };

        postBody = querystring.stringify(postData);
        options = {
            host: "api.apigw.smt.docomo.ne.jp",
            post: 443,
            path: "/voiceText/v1/textToSpeech?APIKEY=4b6a62756e67322f385774655570396962644e594a676249754b736a6e455a477065594a3865764b734f2e",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postBody.length
            }
        };

        var postreq = https.request(options, function (res) {
            res.on('data', function (chunk) {
                ws.write(chunk);
            });
            res.on('end', function () {
                ws.end();
                VoicePlay('voice.ogg');
            });
        });

        postreq.write(postBody);
        postreq.end();
    } else {
        console.log("無言モード！");
    }

}

function VoicePlay(filename) {
    var defaultvoiceCh = "308970029804945409";
    bot.joinVoiceChannel(defaultvoiceCh).catch((err) => {
        bot.createMessage(defaultvoiceCh, "Error joining voice channel: " + err.message);
    }).then((connection) => {
        if (connection.playing) {
            connection.stopPlaying();
        }
        connection.play(filename);
        connection.once("end", () => {
        });
    });
}

bot.connect(); // Get the bot to connect to Discord
nenohi.connect();
