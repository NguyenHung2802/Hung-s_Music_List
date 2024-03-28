const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');
document.addEventListener("DOMContentLoaded", function() {
    const lyricsButton = document.querySelector('.lyrics');
    const lyricsSong = document.querySelector('.lyrics-song');
    const lyrics = document.querySelector('.lyrics');
    const wave = document.querySelectorAll('.waves .wave');
    const listener = document.querySelector('.buttons-action');
    const playering = document.querySelector('.btn-toggle-play');
    const paused = document.querySelectorAll('.waves .wave.paused');
    const musiclist = document.querySelector('.music-items');
    lyricsButton.addEventListener('click', function() {
        lyricsSong.classList.toggle('hidden');
        lyrics.classList.toggle('hidden-player');
    });
    function expandWave() {
        wave.forEach(function(element) {
            element.style.width = '6px';
            paused.forEach(function(element) {
                element.classList.toggle('paused')
            });
        }); 
        
    }
    // musiclist.addEventListener('click', expandWave);
    listener.addEventListener('click', expandWave);
    playering.addEventListener('click', expandWave);
    musiclist.forEach(function(item) {
        item.addEventListener('click', expandWave);
    });
    
});

menuOpen.addEventListener('click', () => sidebar.style.left = '0');
menuClose.addEventListener('click', () => sidebar.style.left = '-100%');

// Các bước cần thực hiện
 /**
  * 1. Render songs
  * 2. Scroll top
  * 3. Play / pause/ seek
  * 4. CD rotate
  * 5. Next / prev
  * 6. Random
  * 7. Next / Repeat when ended
  * 8. Active song
  * 9. Scroll active song into view
  * 10. Play song when click
  */

// Javascript Music

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const PlAYER_STORAGE_KEY = "Hun";

const player = $('.container');
// const cd = $('.right-section .music-player .top-section .song-info .cd');
// const heading = $('.right-section .music-player .top-section .song-info .description h3');
// const cdThumb = $('.right-section .music-player .top-section .song-info .cd .cd-thumb');
const cd = $('.cd');
const heading = $('.description h3');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $('.music-items');
const leftimg = $('.left-img');
const playlisten = $('.buttons-action');
const righting = $('.info h4');
const icon = $('.icon');
const currentTime = $('.time-end')
const duration = $('.time-start')
const volume = $('.volumne__amount');
const volumeProgress = $('.volumne__amount');
const mute = $('.bxs-volume-full');
const unmute = $('.bxs-volume-mute');
const songname = $('.lyrics-song__name');
const lyricsong = $('.lyrics-songs');
// list music
const items = $('.items');
const pop = $('.item.pop');
const poplist = $('.item.pop .music-items__list');
const beat = $('.item.beat');
const beatlist = $('.item.beat .music-items__list');
const remix = $('.item.remix');
const listmusic = $('.music-items__list');
const itemsgenre = $('.items .item');
const seeall = $('.genres .header a');

// console.log(playBtn);

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    volumeAmount: 1,
    isgenre : false,
    ispop: false,
    
    config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: "100 Years Love",
            singer: "AnhVu",
            time: "",
            path: "assets/music/y2mate.com - 100 Years Love  NamDuc AnhVu Remix.mp3",
            image: "assets/img/100yearslovelove.jpg",
            lyrics:
            " Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Nàng ơi em có muốn theo anh ta về chốn phương xa<br>Về một nơi yên bình mà chỉ có đôi ta<br>Lá khẽ đong đưa trên cành cây chốn xa xăm<br>Em có muốn theo anh ta về chốn trăm năm<br>Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Em có biết là vài nụ hồng còn vương khi môi em cười<br>Nhưng em yên tâm khi mà anh yêu là anh xác định sẽ cưới<br>Anh hứa sẽ không bao giờ để giọt lệ trên mi em phải rơi<br>Và anh hứa sẽ không đánh mất em khi ta ở tuổi đôi mươi<br>Vài câu nói đường mật của anh có thể khiến em say đắm<br>Nhưng em có thấu cảm giác ngọt ngào khi đôi ta đan tay nắm<br>Anh thì không có gì ngoài một trái tim chân thành<br>Và em có muốn xây đắp tương lai ngôi nhà hạnh phúc cùng anh<br>Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Nàng ơi em có muốn theo anh ta về chốn phương xa<br>Về một nơi yên bình mà chỉ có đôi ta<br>Lá khẽ đong đưa trên cành cây chốn xa xăm<br>Em có muốn theo anh ta về chốn trăm năm<br>Dù ngoài kia có bão có giông thì đã có anh ở đây rồi<br>Trầu cau nhà anh đã có chỉ chờ em yêu gật đầu một cái thôi<br>Anh biết em vẫn mơ ước về một ngôi nhà mà chúng mình chung đôi<br>Vậy thì gật đầu nhanh đi anh đưa em về rồi chúng mình chung gối<br>Em muốn nhẫn cưới bằng vàng hay là hai bốn cara<br>Em muốn đi trên con Trevita hay là con xe Honda<br>Đối với em thì tình cảm này của anh sẽ luôn là biển cả<br>Thiên thần có ở trên trời anh cũng kéo xuống chúc phúc đôi ta<br>Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Nàng ơi em có muốn theo anh ta về chốn phương xa<br>Về một nơi yên bình mà chỉ có đôi ta<br>Lá khẽ đong đưa trên cành cây chốn xa xăm<br>Em có muốn theo anh ta về chốn trăm năm<br>Vài cơn nắng phiêu du theo làn khói mong manh<br>Là công chúa hay nàng tiên nữ ở trong tranh<br>Gió cuốn mây mang theo tình ta đến mây ngàn<br>Để anh hát cho em những giai điệu ngân vang<br>Hah hah <br>hah hah",
            genre: "Pop"

        },
        {
            name: "Anh Đã Ổn Hơn",
            singer: "RPT MCK",
            time: "",
            path: "assets/music/AnhDaOnHon.mp3",
            image: "assets/img/anhsems.jpg",
            lyrics:
            " Ừ thì anh đã ổn hơn <br>Vẫn muốn biết em đang thấy thế nào <br>Em hỡi có lẽ anh chỉ là thằng điên <br>Đã tìm thấy em <br>Ở một nơi mà sau này anh nhận ra là trong mơ <br>Ừ thì anh đã ổn hơn (I'm ok) <br>Nếu như ta không gặp nhau ở trên tầng lầu <br>Và giá như có thêm lần đầu <br>Để anh nói yêu em, yêu em, yêu em <br>Trao cho em bản tình ca anh viết <br>Chỉ mình em, huh <br>Để em quên đi lệ sầu, được yêu như ngày đầu <br>Chính em, chính em <br>Và có lẽ anh đang chìm sâu <br>Đang không biết là mơ hay thật <br>Nghĩ về em, nên lòng xót xa <br>Cảm xúc đang muốn được kiếm tìm <br>Nên anh lại rót ra <br>Và qua ngày mai <br>Lại phải quên giấc mộng buồn <br>Có em <br>Vẽ thêm nụ cười trong ngần mắt em <br>Vì tất cả những tháng ngày <br>Mình đã đi bên nhau <br>Trao cho em bản tình ca anh viết <br>Chỉ mình em, huh <br>Để em quên đi lệ sầu, được yêu như ngày đầu <br>Chính em, chính em <br>♪ <br>Ừ thì anh đã ổn hơn (I'm ok) <br>Nếu như ta không gặp nhau ở trên tầng lầu <br>Và giá như có thêm lần đầu <br>Để anh nói yêu em, yêu em, yêu em ",
            genre: "Beat"
            
        },
        {
            name: "Từng Là",
            singer: "Vũ Cát Tường",
            time: "",
            path: "assets/music/Tungla.mp3",
            image: "assets/img/tungla.jpg",
            lyrics:" Anh không còn những thói quen <br> Em không còn nhớ thêm <br>Ta trôi xa một nửa kia <br>Nhẹ như mới đến <br> <br>Một ai nhắc tên em <br>Trong câu chuyện xưa cũ với anh <br>Thật vô tư <br><br>Họ chưa biết hai ta <br>Đã không còn nhau nữa <br>Mọi chuyện đã là quá khứ <br><br>Từng là duy nhất mối tình bình yên đối với anh <br>Từng là những nắm tay mềm thật ấm đối với anh <br>Từng là cảm xúc nhớ nhiều về đêm đối với anh <br>Từng là em <br> <br>Từng là những tháng năm dài Mình chung bước bên nhau <br>Từng là những nắng ban chiều Mà anh bước theo sau <br>Từng là tất cả Những gì đời mang đến cho ta <br>Giờ đã quá xa <br> <br>Vào một lần em nói <br>Ta rồi sẽ cách xa </br>Một lần anh ngất <br>Trong màu mây nắng hạ <br>Chắc có lẽ nên là <br>Kết thúc cách im lặng thôi <br> <br></br>Một ai nhắc tên em <br>Trong câu chuyện xưa cũ với anh <br>Thật vô tư <br>Họ chưa biết hai ta <br>Đã không còn nhau nữa <br>Mọi chuyện đã là quá khứ <br> <br>Từng là duy nhất mối tình bình yên đối với anh <br>Từng là những nắm tay mềm thật ấm đối với anh <br>Từng là cảm xúc nhớ nhiều về đêm đối với anh <br>Từng là em <br> <br>Từng là những tháng năm dài Mình chung bước bên nhau <br>Từng là những nắng ban chiều Mà anh bước theo sau <br>Từng là tất cả Những gì đời mang đến cho ta <br>Giờ đã quá xa <br> <br>Oh no we used to be <br>Used used to be <br>Oh no we used to be lovers <br>Oh no we used to be. <br>Used used to be <br>Oh no we used to be lovers <br>Oh no we used to be <br>Used used to be <br>Oh no we used to be lovers <br>Oh no we used to be <br>Used used to be <br>Oh no we used to be lovers <br> <br>Từng là duy nhất mối tình bình yên đối với anh <br>Từng là những nắm tay mềm thật ấm đối với anh <br>Từng là cảm xúc nhớ nhiều về đêm đối với anh <br>Từng là em <br> <br>Từng là những tháng năm dài Mình chung bước bên nhau <br>Từng là những nắng ban chiều Mà anh bước theo sau <br>Từng là tất cả Những gì đời mang đến cho ta <br>Giờ đã quá xa",
            genre: "Beat",
        },
        {
            name: "Hẹn Em Ở Lần Yêu Thứ Hai",
            singer: "Nguyenn, Đặng Tuấn Vũ",
            time: "",
            path:
                "assets/music/HenEmOLanYeuThu2-NguyennDangTuanVu-8865500.mp3",
            image: "assets/img/Henemolanyeuthu2.jpg",
            lyrics:" Mọi chuyện rồi cũng sẽ ổn thôi đúng không anh ơi? <br>Là điều em nói lúc em muốn chúng ta xa rời <br>Anh không *** trả lời tin nhắn ấy <br>Cứ giả vờ như mình chẳng nhìn thấy đâu <br>Anh thương cho mối tình của hai đứa <br>Phải kết thúc như vậy sao? <br> <br>Thời gian trôi như gió vội bay qua trời <br>Nhiều chuyện anh cứ chôn thật sâu chẳng muốn mở lời <br>Ngày ngày lo cho tương lai <br>Nhưng em cứ ngỡ anh đã có ai <br>Bên nhau cả quãng đường dài <br>Mà giờ em nói em muốn dừng lại <br> <br>Anh phải làm gì để em đừng nghĩ: <p>Em không quan trọng</p> <br>Nuốt hết đắng cay vào trong lòng <br>Cuộc đời anh như con số 0 <br>Cha mẹ già vất vả, đêm ngủ chẳng ngon <br>Phận làm con anh đây chữ hiếu chưa tròn <br>Anh phải bù đắp cho em bao nhiêu để em chẳng còn thấy thiếu? <br> <br>Dành hết cả thanh xuân này cho nhau, liệu còn bên nhau lúc mai sau? <br>Có phải ngay lúc đầu, em đã chẳng chọn anh đâu? <br>Anh vẫn muốn ngày thành công, sẽ được che chở em <br>Còn em đợi ngày đó để có thể yên tâm rời xa anh <br>Liệu có quá nhẫn tâm? <br><br>Mọi chuyện buồn, mình sẽ vượt qua phải không em à? <br>Là điều anh muốn, nhưng anh chẳng thể nói ra <br>Anh không muốn mình, phải quên mất hết <br>Chẳng muốn mình trôi khỏi ký ức của em <br>Anh thương cho người con gái, cạnh bên anh dẫu chẳng có tương lai <br>Có những đoạn đường, ta buộc phải bước một mình em à <br>Có những nỗi niềm anh gửi vào gió, chẳng muốn nói ra <br>Không ai muốn phải chia xa, rồi làm bạn với người mình yêu nhất cả <br>Bên nhau bao lâu vậy mà, một vài câu nói, em bỗng xa lạ <br> <br>Anh phải làm gì để em đừng nghĩ: Em không quan trọng <br>Nuốt hết đắng cay vào trong lòng <br>Cuộc đời anh như con số 0 <br>Cha mẹ già vất vả, đêm ngủ chẳng ngon <br>Phận làm con anh đây chữ hiếu chưa tròn <br>Anh phải bù đắp cho em bao nhiêu để em chẳng còn thấy thiếu?  <br>Anh phải làm gì để em đừng nghĩ em không quan trọng <br>Nuốt hết đắng cay vào trong lòng cuộc đời anh như con số 0 <br>Em vẫn còn thương anh đúng không? <br>Cuộc đời bao lo toan anh chẳng muốn phiền lòng <br>Năm tháng có quay lại không? <br>Hay chỉ cho ta thêm một khoảng trống <br> <br>Dành hết thanh xuân này bên nhau, bây giờ thanh xuân ấy nơi đâu? <br>Có phải ngay lúc đầu, ta vốn chẳng dành cho nhau? <br>Anh không muốn em phải đau, phải đợi anh quá lâu <br>Chờ đợi từng lời hứa, anh chẳng thể tin bản thân mình được nữa <br>Vậy ta kết thúc được chưa? <br><p>Hẹn em ở lần yêu thứ 2</p> ",
            genre: "Pop",
        },
        {
            name: "Lộn Xộn 2",
            singer: "Đen",
            time: "",
            path: "assets/music/Lonxon2.mp3",
            image:
                "assets/img/Lonxon2.jpg",
            lyrics:"Make me swoon make me sway (yo) <br>With your arms with your rhythm (you know) <br>Let us dance in the rain in the war in the prison <br>Yeah babe anh trở về lại với trường cũ <br>Anh lại viết nhạc vào cái giờ mà mọi người thường ngủ <br>Cảm thấy trống trải dù căn phòng này có đủ giường tủ <br>Hôm nay anh thấy buồn buồn hơn cả nhạc Trường Vũ <br>Chơi nhạc mới đó vậy mà đã gần mười năm rồi <br>Anh buồn vì có những ngày cành lá tâm tư anh lười đâm chồi <br>Buồn những muộn phiền khiến cho đôi khi lòng này cười không nổi <br>Buồn vì có những ngày bất ổn nhưng không có đến một người thăm hỏi oh <br>Miền Bắc mùa này mưa phùn thời tiết khó chịu lắm em <br>Anh đi loanh quanh ngoài đường đôi converse đã lấm lem <br>Trong đầu anh không định hướng lời nhạc này cũng mông lung <br>Bây giờ anh đứng ở đây nhưng tâm hồn ở trên không trung <br>Thật may là anh có rap có nhịp beat để thả vào <br>Như một tấm đệm êm oh mỗi khi mệt anh ngả vào <br>Đã từng hi vọng và cũng đã từng thất vọng nhiều (oh) <br>Dù có một ngày tất cả trôi qua nhẹ như một giấc mộng chiều oh <br>Những quả bóng bay rồi thì cũng sẽ có ngày bị xẹp mất <br>Những ngày còn được chơi rap chắc chắn là những ngày đẹp nhất (yoh) <br>Và tao lại feel như là cơn gió bay trong buổi chiều mượt mà (what) <br>Mừng như thằng nhóc bỗng được mang đến được cho thật nhiều hộp quà (what) <br>Trở về trường cũ cho tao có thể gửi gắm nhiều điều thật thà (yeah) <br>Mỗi ngày còn rap vui như là Lục Vân Tiên gặp Kiều Nguyệt Nga (ha há) <br>Chẳng có gì đáng tự hào khi có những ngày đầy cực khổ <br>Như nước mày uống còn ko nhiều bằng mồ hôi tao từng đổ <br>Tao là thằng con lớn ông bà già tao ai lo <br>Đã có những ngày ăn bữa hôm nay chỉ mong ngày mai no <br>Ai thì cũng như ai muốn có tiền nhà và xe <br>Đêm nằm thật yên giấc không muốn có phiền hà mà care <br>Ai thì cũng như ai thôi bằng cách này hoặc cách khác <br>Và tao thay đổi cuộc đời của tao bằng cách rap <br>Viết một bài nhạc mệt như đi cày trong trưa hè tháng sáu <br>Chất xám tao đưa vào đó thật ra không khác gì bán máu <br>Mày không thể nào mà đem đơn vị bình thường ra đo đạc <br>Âm nhạc của tao giàu có không khác gì vàng trong kho bạc <br>Đừng phán xét tao khi đời của tao sẽ chẳng ai sống cho <br>Mấy thằng thùng rỗng thì thường hay cho mình là cái trống to <br>Nhiều thằng đi bằng hai chân nhưng mà thật ra là giống bò <br>Cái chất của tao không thể nhầm lẫn dù cho tao hoá thành đống tro <br>",
            genre: "Beat",
        },
        {
            name: "Đánh Đổi",
            singer: "Obito, MCK, Shiki",
            time: "",
            path: "assets/music/DanhDoi.mp3",
            image:
                "assets/img/danhdoi.png",
            lyrics: "Tao đánh đổi màn đêm yên giấc <br>Viết những bài nhạc hay nhất cuộc đời <br>Di sản là nguồn cảm hứng <br>Fan theo răm rắp nhạc tao thuộc lời <br>Trên bàn tiệc của tiên và quỷ <br>Tao là thằng duy nhất được mời <br>Mọi thứ đổ dồn hết vào tao <br>Như kiểu tao là một ván cược hời <br>Tao là đứa con của mặt trăng <br>Mang năng lượng mặt trời <br>Cuộc đời xoay tao như trực thăng <br>Vẫn vượt lên như thể gặp thời <br>Tao không vứt đi bản chất tao <br>Như mấy thằng khác để ví được lời <br>Nếu mày cũng mặt nặng mài nhẹ <br>Vì không đồng ý thì thôi được rồi <br>Shout out cho anh Sea <br>Lời chúc phúc bay trên bầu trời <br>Em mong anh hãy nói với mẹ <br>Cuộc sống con giờ đã đỡ cực rồi <br>Hai anh em đã đổ nước mắt <br>Nhiều câu chuyện về những người tồi <br>Sự đánh đổi này vẫn luôn đẹp <br>Như thể ngày xưa chơi cất nhà chòi**** it <br>Đêm đông lạnh giữa trời Hà Nội <br>Flow tao chảy cùng những niềm đau <br>Như thể đang châm thêm mực vào ngòi <br>Chuỗi hành trình cùng nhiều câu hỏi <br>Ai là cá còn ai là mồi <br>Mọi thứ đều luôn có mặt tối <br>Nhưng liệu mày có sẵn sàng đánh đổi <br>Ngắm nhìn cả thế giới từ xa <br>Damn it's cold <br>Nếu mày hỏi tao ác hay thiện <br>Man I don't know <br>Chắc đây vốn đã là <br>Cái giá cho bao lần đau <br>Sự đánh đổi này cho tao thấy <br>Mọi thứ đã không như ngày đầu <br>Ngắm nhìn cả thế giới từ xa <br>Damn it's cold <br>Nếu mày hỏi tao ác hay thiện <br>Man I don't know <br>Chắc đây vốn đã là <br>Cái giá cho bao lần đau <br>Sự đánh đổi này cho tao thấy <br>Mọi thứ đã không như ngày đầu <br>It's a fair trade <br>Telling all the truth <br>It's a fair trade <br>Ain't none pussy in the way <br>It's a fair trade <br>**** you if you fake it <br>It's a ****ing fair trade oh <br>2020 và tao nổi như hiện tượng <br>Nhưng không chìm vào trong đấy <br>Để rồi chết như thằng ngu <br>Ba năm đánh đổi <br>Để tu thân trong hoạ đời <br>Rồi biết đâu là thật giả <br>Tâm tao nhàn như tiều phu <br>Đảo mắt quan sát <br>Như diều hâu đang đi lượn <br>Im lặng và cười nhếch <br>Với drama và ruồi bu <br>2023 lời tao bắn như cái máy <br>Mà còn *** trượt phát nào <br>Sự đánh đổi đó thằng *** Trò đời quăng tao vào địa ngục <br>Cho tao biết mặt trái của whole game <br>Cho tao bài hit, cho fame <br>Xong nó lấy đi tất cả sao bao đêm <br>Tao vẫn vươn từ dưới đáy đi lên <br>Bật và đòi lại bằng được no shame <br>Chiêm nghiệm và mài giũa thâu đêm <br>Giờ tinh khiết và óng ánh như blue gem <br>Không tìm thấy tao <br>Tao bận đi tu",
            genre: "Remix",
        },
        {
            name: "Những Lời Hứa Bỏ Quên",
            singer: "Vũ, Dear Jane",
            time: "",
            path:
                "assets/music/Nhungloihuaboquen.mp3",
            image:
                "assets/img/Nhungloihuaboquen.jpg",
            lyrics: "[Lời] <br>Nếu hai ta không quên ngàу ấу, ngàу những đôi môi trao nhau không lời <br>Thì niềm đau cũng đã trôi hết đi qua bao tháng năm anh với em <br>Lúc gặp nhau con tim nói không nên lời và khi thời gian trôi như mâу baу về trời <br>Anh đem theo giấc mơ nàу để rồi mong ngàу ta chung đôi <br> <br>[Điệp khúc] <br>Anh sẽ nhớ mong một người là chính em <br>Sẽ nhớ thương thật nhiều điều vấn vương <br>Đôi mắt xưa còn đượm buồn <br>Theo vệt thời gian đã hóa tan theo làn sương <br>Hai ta có trên đường đời nhìn thấу nhau <br>Trong phút giâу nghẹn ngào thì anh chẳng thể bước tới <br>Chào em như trong giấc mơ, giấc mơ ta được có nhau <br> <br>[Chuуển tiếp cuối bài] <br>Thức giấc lúc khi trời mưa <br>Chuуện уêu thương ùa về khiến anh nhận ra <br>Kí ức đón đưa ngàу xưa <br>Chuуện đôi ta nghẹn ngào tình cờ <br>Đợi chờ để được quaу lại giâу phút đầu <br> <br>[Điệp khúc] <br>Anh sẽ nhớ mong một người là chính em <br>Sẽ nhớ thương thật nhiều điều vấn vương <br>Đôi mắt xưa còn đượm buồn <br>Theo vệt thời gian đã hóa tan theo làn sương <br>Hai ta có trên đường đời nhìn thấу nhau <br>Trong phút giâу nghẹn ngào thì anh chẳng thể bước tới <br>Chào em như trong giấc mơ, giấc mơ ta được có nhau"
        },
        {
            name: "Khi Phải Quên Đi",
            singer: "Phan Mạnh Quỳnh",
            time: "",
            path:
                "assets/music/KhiPhaiQuenDi-PhanManhQuynh-3200816.mp3",
            image:
                "assets/img/Khiphaiquendi.jpg",
            lyrics:"Đau buồn chẳng phải khi người bỏ anh đi <br>vì khi yêu thương phôi phai anh biết làm gì <br>Chuyện đến sẽ đến chẳng như ta vẫn nghĩ <br>người kết thúc vội những phút giây anh ngủ mê <br>Đau buồn chẳng phải khi người quên tên anh <br>thời gian qua nhanh mang theo ký ức ngày nào <br>Cuộc sống tiếp diễn đưa em đến người khác <br>rồi chẳng mấy khi nhớ lại <br>Một người đã đi qua <br> <br>Nhưng anh đau khi anh đánh mất em <br>làm sao anh quên đi năm tháng ấy <br>từng hoài niệm đó anh ghi vào tim từng ấm áp ấy anh giữ lại mãi cho vơi chua cay <br>Khi anh cô đơn <br>Nhưng anh đau khi em dứt cánh tay <br>rồi quay lưng đi khi anh cố níu <br>tìm hình dáng ấy trong đêm mù tối <br>tìm tiếng nói ấy sau những màn mưa <br>ai xua tan đi giây phút có em <br>qua rồi <br> <br>Ngước nhìn lên trời cao rồi hỏi trăng sao <br>tình yêu nơi nao không mang những tiếng thở dài <br>Hạnh phúc quá ngắn khi ta sớm lìa nhau <br>đành dấu chôn đi nỗi buồn <br>chờ ngày hình dung phai<br>"
        },
        {
            name: "Tìm Nhau Không",
            singer: "Tăng Phúc",
            time: "",
            path:
                "assets/music/TimNhauKhong-TangPhuc-7828203.mp3",
            image:
                "assets/img/Timnhaukhong.jpg",
            lyrics: "Tìm nhau không nếu mai này <br>Mình lỡ cách xa trời mây <br>Lỡ sẽ không nhìn thấy nhau <br>Giữa dòng đời nhiều đổi thay <br>Tìm nhau không nếu một ngày <br>Mình nuối tiếc những nồng say <br>Đâu phải ai cũng sẽ tìm được hạnh phúc <br>Dù chịu đựng đắng cay <br>Mình không cùng chung ước mơ <br>Mình không về chung bến bờ <br>Mình không thể cùng viết nên câu chuyện <br>Mà ta từng hứa với nhau <br>Rồi ai sẽ ôm lấy ai <br>Rồi ai sẽ lau mắt ai <br>Rồi ai sẽ nhắc đến ai <br>Trong suốt quãng đời còn lại <br>Mà cả hai chẳng thể bên nhau <br>Tìm nhau không nếu mai này <br>Mình lỡ cách xa trời mây <br>Lỡ sẽ không nhìn thấy nhau <br>Giữa dòng đời nhiều đổi thay <br>Tìm nhau không nếu một ngày <br>Mình nuối tiếc những nồng say <br>Đâu phải ai cũng sẽ tìm được hạnh phúc <br>Dù chịu đựng đắng cay <br>Mình không cùng chung ước mơ <br>Mình không về chung bến bờ <br>Mình không thể cùng viết nên câu chuyện <br>Mà ta từng hứa với nhau <br>Rồi ai sẽ ôm lấy ai <br>Rồi ai sẽ lau mắt ai <br>Rồi ai sẽ nhắc đến ai <br>Trong suốt quãng đời còn lại <br>Mà cả hai chẳng thể bên nhau <br>Mình không cùng chung ước mơ <br>Mình không về chung bến bờ <br>Mình không thể cùng viết nên câu chuyện <br>Mà ta từng hứa với nhau <br>Rồi ai sẽ ôm lấy ai <br>Rồi ai sẽ lau mắt ai <br>Rồi ai sẽ nhắc đến ai <br>Trong suốt quãng đời còn lại <br>Mà cả hai chẳng thể bên nhau <br>Rồi ai sẽ nhắc đến ai <br>Trong suốt quãng đời còn lại <br>Mà cả hai chẳng thể bên nhau<br>"
        },
        {
            name: "Có Cơn Mưa Nào Đôi Mình Đi Qua",
            singer: "M/n",
            time: "",
            path:
                "assets/music/Id072019-WN-10597501.mp3",
            image:
                "assets/img/Coconmuanaodoiminhdiqua.jpg",
            lyrics:"Có cơn mưa nào đôi mình đi qua<br>Anh đến bên em<br>Ngày đôi mình chia xa<br>Mỗi lá rơi bên hồ<br>Nỗi cô đơn lớn lên Mùa thu ấy<br>Em không còn bên cạnh anh nữa<br>Anh vẫn đứng nơi đây<br>Chờ em cùng cơn mưa Chúng ta sau này<br>Chẳng có chúng ta bây giờ<br>Một người âm thầm<br>Đứng dưới mưa nhìn em<br>Một người giữa thành phố Vẫn cứ chờ em<br>Vì sao cứ nơi đó mà<br>Anh dần xa nơi đâu<br>Giờ này chỉ nỗi nhớ<br>Cứ vơi nhiều thêm<br>Giờ này chỉ mình ta<br>Với những tháng năm dài<br>Có khi em chẳng còn yêu anh<br>Như trái tim ta từng chung lối đi<br>Anh đi một vòng thị trấn<br>Trên con đường cũ ta đi<br>Vòng bánh xe như thế cứ chạy<br>Hai tuyến đường ngược chiều ta nghĩ<br>Chắc em cũng quên tên đường này rồi<br>Nhánh hoa sữa nhẹ bay đi khắp lối<br>Em cũng giống như anh của ngày trước<br>Hai con đường về nhà khi sắp tối<br>Anh còn nhớ hồi đó ta đi học<br>Lúc tan trường thì em ngồi sau xe<br>Lúc em buồn thì anh hay trêu chọc<br>Bảo em cười kể chuyện cho nhau nghe<br>Rồi vào quán mua món mà em thích<br>Em mỉm cười làm anh cũng vui lây<br>Nhưng hồi đó thì vẫn là hồi đó Anh cảm ơn em<br>Đã để lại chuỗi ngày<br>Một người âm thầm<br>Đứng dưới mưa nhìn em<br>Một người giữa thành phố Vẫn cứ chờ em<br>Vì sao cứ nơi đó mà<br>Anh dần xa nơi đâu<br>Giờ này chỉ nỗi nhớ<br>Cứ vơi nhiều thêm<br>Giờ này chỉ mình ta<br>Với những tháng năm dài<br>Có khi em chẳng còn yêu anh<br>Như trái tim ta từng chung lối đi<br>Có cơn mưa nào đôi mình đi qua<br>Anh viết cho em<br>Bài ca mùa yêu xa<br>Mỗi lá rơi bên hồ<br>Nỗi cô đơn lớn lên Mùa thu ấy<br>Anh không còn bên cạnh em nữa<br>Em vẫn đứng nơi đây<br>Chờ anh cùng cơn mưa<br>Chúng ta sau này<br>Chẳng có chúng ta bây giờ"
        },
        {
            name: "Buồn Hay Vui",
            singer: "VSOUL, RPT MCK, Obito, V.A",
            time: "",
            path: "assets/music/BuonHayVui.mp3",
            image:
                "assets/img/buonhayvui.png",
            lyrics: "VSOUL: <br>Em đang buồn buồn buồn, buồn hay vui <br>Môi em cười nhưng nước mắt của em tuôn rơi x2 <br> <br>Mascara em nhòe xin đừng che dấu <br>Và nếu “có thể” em cứ hãy để cho anh lau <br>Mọi thứ yên lặng kể từ ngày mà họ phai dấu <br>Giọt mưa trên mi xát vào những vết thương ấy đau <br> <br>Em cứ gọi dù là ở bất cứ nơi đâu <br>Anh vẫn như vậy vẫn là người sẽ ở đây thôi <br>Đừng để nỗi buồn này củng chỉ có mình em thấu <br>Call up my phone you will neva feel alone <br> <br>Em hãy cười cười cười cười lên đi <br>Anh không muốn để em với những dòng lệ trên mi <br>Anh muốn em nhìn vào màn hình và nhìn anh đi <br>Nhìn anh hôn em chưa bao giờ mà anh nghĩ suy <br> <br>Em hãy cười cười cười cười lên đi <br>Anh không muốn để em với những dòng lệ trên mi <br>Anh muốn em nhìn vào màn hình và nhìn anh đi <br>Nhìn anh hôn em chưa bao giờ mà anh nghĩ suy <br> <br>MCK : <br>Calling to my phone no trip <br>Calling to my phone <br>Yêu em nhưng mà em chưa đồng ý muốn trao những cái hôn <br>Dáng thon yehh okkk em fashion khiến cho anh khoái hơn <br>Và đêm nay là mưa to không về được nước rơi trên mái tôn <br>You known what for me <br>Con tim em đây đưa anh xem xem nó thật là to <br>Give it to me i give it to you đơn giản là nhận và cho <br>Từng bước một từng bước một từng bước một anh đã trao em we gonna fall in love <br>Cho anh say mắt môi em hãy cười cười cười lên đi <br>Đừng để nỗi buồn nó mặt kẹt lại ở trên mi <br>Nhiều lúc anh ngại rồi rồi em bảo là phải nhìn em đi <br>Nhìn em ôm anh chưa bao h mà em nghĩ suy <br>Calling to my phone <br>Calling to my phone <br>Calling to my phone <br>Calling to my phone<br>OBITO :<br>Hurt hurt baby, rất rất đau<br>Hurt hurt baby, rất rất đau<br>Hurt hurt baby, rất rất đau<br>Hurt hurt baby, rất rất đau<br><br>Baby 2am in the morning<br>Tự hỏi dòng suy nghĩ của em ra sao, u got me falling<br>Girl aint no trap just good vibe when we were rolling<br>Chỉ cần dòng tin nhắn đến đón em, imma ballin<br><br>Đừng để trái tim ta phai tàn, để nụ hồng lại héo đi<br>Nước mắt rơi trong đêm lạnh, nụ cười nàng lại méo đi<br>Cứ trao nhau môi ngọt, bảo chuyện buồn nó xéo đi<br>Hãy cứ khóc đi anh đây rồi, tay người đâu anh kéo đi<br><br>Điệu nhạc lướt đi trên cung đàn, ngàn ánh sao, muôn màu, anh với em<br>Màu đôi mắt em soi tâm hồn, em thấy không, em không cần, buồn mỗi đêm<br><br>Em hãy cười, cười, cười, cười lên đi<br>Mặt xinh kia đừng, đừng để những giọt lệ trên mi<br>Anh muốn em nhìn vào màn hình và nhìn anh đi"
        },
        {
            name: "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
            singer: "O.lew",
            time: "",
            path: "assets/music/RoiTaSeNgamPhaoHoaCungNhau-OlewVietNam-8485329.mp3",
            image:
                "assets/img/Roitasengamphaohoacungnhau.jpg",
            lyrics: "Người đón em đến bên đời là điều tuyệt nhất để khiến em cười <br>Người cứ như ô che mưa, như mây bay qua cho ngày trong xanh. <br>Ở đây có anh này em thật nhỏ bé trong chiếc ôm này <br>Ấm hơn chăn mà, còn thơm hơn hoa mà sao em nỡ rời xa. <br> <br>Chorus: <br>Rồi ta sẽ ngắm pháo hoa cùng nhau trên tầng thượng phía bên kia dòng sông <br>Vạn lời chúc ấm êm cho nhau là sẽ thành đôi sau vài cái xuân <br>Mong trời sẽ thương em thương anh và cho đôi mình mãi bên nhau dài lâu <br>Cho dù thế gian kia cuồng quay trăm bộn bề ta vẫn không cách rời. <br> <br>Thấy anh đứng đây rồi, mắt cười cong khoé mi hý đây rồi <br>Càng đắm say thế nên em lại sợ một mai mình rời xa nhau. <br>Anh thơm vào má em này cho chừa cái thói nói vớ vẩn này <br>Mặt ngây ngô ra rồi còn anh thì đứng cười <br>Đây có phải là điều tuyệt nhất. <br> <br>Chorus: <br>Rồi ta sẽ ngắm pháo hoa cùng nhau trên tầng thượng phía bên kia dòng sông <br>Vạn lời chúc ấm êm cho nhau là sẽ thành đôi sau vài cái xuân <br>Mong trời sẽ thương em thương anh và cho đôi mình mãi bên nhau dài lâu <br>Cho dù thế gian kia cuồng quay trăm bộn bề ta vẫn không cách rời. <br> <br> <br>Dù mai mặt trời không chiếu sáng trên hành tinh này <br>Thì em vẫn sẽ tìm thấy anh bằng trái tim này <br>Dù mai đời,người dẫu có cách ngăn tình ta <br>Thì em xin một lần không tên, nguyện yêu anh một đời an yên.<br>"
        },
        {
            name: "Đi  Về Nhà",
            singer: "JustaTee, Đen",
            time: "",
            path: "assets/music/y2mate.com - Đen x JustaTee  Đi Về Nhà MV.mp3",
            image:
                "assets/img/Divenha.webp",
            lyrics: "Đường về nhà là vào tim ta <br>Dẫu nắng mưa gần xa <br>Thất bát vang danh <br>Nhà vẫn luôn chờ ta <br>Đường về nhà là vào tim ta <br>Dẫu có muôn trùng qua <br>Vật đổi sao dời <br>Nhà vẫn luôn là nhà (đi về nhà) <br>Ya lao vào đời và kiếm cơm lao vào đời tìm cơ hội <br>Những thành thị thường lấp lánh còn đêm thành thị thường trơ trọi <br>Như mọi đứa trẻ khác lớn lên muốn đi xa hoài (xa hoài) <br>Nhà thì vẫn ở yên đó đợi những đứa con đang ra ngoài <br>Bước ra ngoài mới biết không ở đâu bằng ở nhà (ở nhà) <br>Biết có gì để mất trước khi sẵn sàng mở quà (mở quà) <br>Không phải là võ sĩ nhưng mà phải giỏi đấu đá <br>Nhiều khi kiệt sức chỉ vì gắng giữ mình không xấu xa <br>Đôi lúc bỗng thấy đồng cảm với Mai An Tiêm <br>Bước chân ra là sóng gió chỉ có nhà mãi an yên <br>Ngoài kia phức tạp như rễ má và dây mơ (dây mơ) <br>Về nhà để có lúc cho phép mình được ngây thơ <br>Mang theo bao náo nức lên chiếc xe này <br>Trọn một niềm thao thức xuân níu đêm ngày <br>Cùng dòng người trên phố mang sắc mai hương đào <br>Tìm về nơi ấm êm <br>Đường về nhà là vào tim ta <br>Dẫu nắng mưa gần xa <br>Thất bát vang danh <br>Nhà vẫn luôn chờ ta <br>Đường về nhà là vào tim ta <br>Dẫu có muôn trùng qua (dẫu muôn trùng qua) <br>Vật đổi sao dời (vật đổi sao dời) <br>Nhà vẫn luôn là nhà <br>Về ngôi nhà có góc vườn nhiều chó nhiều gà <br>Đám bạn nói con khó chiều <br>Mà lại thích gió trời hơn gió điều hoà ah <br>Về ăn cơm mẹ nấu về mặc áo mẹ may <br>Về đưa ba ra chợ mua cây đào cây mai về bày <br>Cả năm trời làm việc nhiều khi rã rời như cái máy oh <br>Về nhà thấy áp lực nhẹ như bấc thổi cái là bay (thổi cái là bay) <br>Ấm êm hơn bếp lửa ngọt bùi hơn lúa non <br>Nhà vẫn luôn ở đó mong chờ những đứa con <br>Dẫu cho mưa cho nắng vẫn không bao giờ nề hà <br>Hạnh phúc chỉ đơn giản là còn được về nhà oh <br>Hạnh phúc đi về nhà <br>Cô đơn đi về nhà <br>Thành công đi về nhà <br>Thất bại đi về nhà <br>Mệt quá đi về nhà <br>Mông lung đi về nhà <br>Chênh vênh đi về nhà <br>Không có việc gì vậy thì đi về nhà <br>Không có việc gì vậy thì đi về nhà <br>Đi về nhà đi về nhà <br>Đường về nhà là vào tim ta <br>Dẫu nắng mưa gần xa <br>Thất bát vang danh <br>Nhà vẫn luôn chờ ta <br>Đường về nhà là vào tim ta <br>Dẫu có muôn trùng qua <br>Vật đổi sao dời <br>Nhà vẫn luôn là nhà <br>Nhà có thể lớn có thể nhỏ có thể không khang trang <br>Cha mẹ nào cũng muốn con được sống đàng hoàng <br>Lớn lên làm người mong một tương lai sáng lạng "
        },
        {
            name: "Đưa Nhau Đi Trốn",
            singer: "Đen, Linh Cáo",
            time: "",
            path: "assets/music/y2mate.com - Đen  Đưa Nhau Đi Trốn ft Linh Cáo MV.mp3",
            image:
                "assets/img/Duanhauditron.jpg",
            lyrics: "Bố em hút rất nhiều thuố<br>Mẹ em khóc mắt lệ nho<br>Bố anh thì đi lại còn mẹ anh gọi điện thoại đến từng nh<br>Nhiều ngày rồi mình không về, không liên lạc được gì c<br>Chỉ vỏn vẹn mảnh giấy đừng lo, đêm nay con đi chơi x<br>Em ơi đi trốn với an<br>Mình đi đến nơi có biển bạc núi xan<br>Chạy con xe anh chở em tròng tràn<br>Mình phóng tầm mắt ngắm chân trời mới toan<br>Mình ngủ một giấc mà không cần báo thứ<br>Giờ này mọi khi anh đang trong ca trự<br>Em thì đang lo ngày mai giảng đườn<br>Ôi những thứ chán chường không tẹo nào háo hứ<br>Mình rời thành phố chật chội náo nứ<br>Nơi mà cả việc thở cũng làm ta lao lự<br>Mơ những con đường xa làm anh thấy rạo rự<br>Muốn đưa em đi trốn đến tận cùng trái đấ<br>Anh chẳng cần biết là ngày nắng đẹp rạng ngờ<br>Hay gió về, hay bão táp mưa rơ<br>Ngày mình đi với nhau ấy là ngày đẹp trờ<br>Thì theo anh đi trốn em ơ<br<br>[Chorus: Linh Cáo<br>Thật lòng em mơ, mơ cùng anh đi đến tận cùn<br>Tận cùng chân mây vượt núi cao hay biển sâ<br>Biết mấy là yêu cho vừ<br>Giết mấy thời gian cho vừ<br>Khi yêu ta mơ về nha<br>Để thấy lắm lúc lòng mình nhẹ nhiều kh<br>Muốn ném hết tất cả để mà đ<br>Một lần mình sống như những đứa nhóc không nh<br>Sớm thức dậy ở một nơi xa"
        },
        {
            name: "Vì Ngày Hôm Nay Em Cưới Rồi",
            singer: "Khải Đăng",
            time: "",
            path: "assets/music/y2mate.com - Hôm Nay Em Cưới Rồi  Khải Đăng  Thanh Hưng  Live Version.mp3",
            image:
                "assets/img/Vingayhomnayemcuoirooi.jpg",
            lyrics: "Muốn đi vài hôm xa chính nơi ta từng có phút êm đềm trước ngày giông tố đến tìm<br>Đến khi nhận ra nên quý hơn những ngày tháng<br> sống bên nhau thì mình muộn mất rồi<br>Giờ nay em có lẽ rất vui, <br>cùng người em yêu chung bước không quay lại nhìn<br>Dù soa thì anh vẫn mong em luôn bình yên <br>và xin lỗi vì chẳng đến chúc phúc cho em<br>Vì ngày hôm nay em cưới rồi <br>vụn vỡ vết thương đau mãi trong tim<br>Người đàn ông may mắn ấy từ nay đã có em<br>Chỉ muốn đến đây gặp em một lần <br>để thấy em hạnh phúc thế nào rồi anh đi<br>Vì ngày hôm nay em cưới rồi mai sau anh sống thế nào<br>Một người đã mang cả thế giới sánh đôi vình yêu mới<br>Ngày em đẹp nhất trên đời là ngày chúng ta xa một người<br>Nợ duyên đến nay mình trả hết rồi<br><br>Dù có một đời anh cố gắng thì vẫn không sao giữ em<br>Một người đã mang cả thế giới sánh đôi với tình yêu mới<br>Ngày em đẹp nhất trên đời là ngày chúng ta xa một người<br>Nợ duyên đến nay mình trả hết rồi<br>"
        },
    ],

    setConfig: function(key, value){
        this.config[key] = value;
        localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },

    progressInput: function(item) {
        let sliderValue = item.value;
        item.style.background = `linear-gradient(to right, var(--color-theme) ${sliderValue}%, #4d4d4d ${sliderValue}%)`;
    },

    render: function(){
        const htmls = this.songs.map((song, index) =>{
            return `
                <div class="item ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                        <i class='bx bxs-plus-square'></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = htmls.join('');
    },

    renderlistpop: function(){
        // Lọc danh sách các bài hát theo từng thể loại
        const popSongs = this.songs.filter(song => song.genre === 'Pop');
    
        //Tạo HTML cho danh sách các bài hát theo từng thể loại
        const popHtmls = popSongs.map((song, index) =>{
            return `
                <div class="itemlist ${index === this.currentIndex ? 'active' : ''}" data-song-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer} - ${song.genre}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        // const poplist = document.querySelector('.item.pop .music-items__list');
        if (popHtmls.length > 0) {
            poplist.innerHTML = popHtmls.join('');
        }else{
            poplist.innerHTML = '<p>No songs available</p>';
        }
    },
    renderlistbeat: function(){
        // Lọc danh sách các bài hát theo từng thể loại
        const beatSongs = this.songs.filter(song => song.genre === 'Beat');
    
        //Tạo HTML cho danh sách các bài hát theo từng thể loại
        const beatHtmls = beatSongs.map((song, index) =>{
            // Tạo HTML cho danh sách các bài hát thể loại 'Beat'
            return `
                <div class="itemlist ${index === this.currentIndex ? 'active' : ''}" data-song-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer} - ${song.genre}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        // const beatlist = document.querySelector('.item.beat .music-items__list');
        if (beatHtmls.length > 0) {
            beatlist.innerHTML = beatHtmls.join('');
        }else{
            beatlist.innerHTML = '<p>No songs available</p>';
        }
        
    },
    renderlistremix: function(){
        // Lọc danh sách các bài hát theo từng thể loại
        const remixSongs = this.songs.filter(song => song.genre === 'Remix');
    
        //Tạo HTML cho danh sách các bài hát theo từng thể loại
        const remixHtmls = remixSongs.map((song, index) =>{
            // Tạo HTML cho danh sách các bài hát thể loại 'Beat'
            return `
                <div class="itemlist ${index === this.currentIndex ? 'active' : ''}" data-song-index="${index}">
                    <div class="info">                     
                        <img src="${song.image}" alt="">
                        <div class="details">
                            <h5>${song.name}</h5>
                            <p>${song.singer} - ${song.genre}</p>
                        </div>
                    </div>
                    <div class="actions">
                        <div class="icon">
                            <i class='bx bx-play' data-index="${index}"></i>
                            <i class='bx bx-pause' data-index="${index}"></i>
                        </div>
                    </div>
                </div>
            `;
        });
        const remixContainer = document.querySelector('.item.remix .music-items__list');
        if (remixHtmls.length > 0) {
            remixContainer.innerHTML = remixHtmls.join('');
        }else{
            remixContainer.innerHTML = '<p>No songs available</p>';
        }
    },
    

    defineProperties: function(){
        Object.defineProperty(this,'currentSong',{
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function(){
        const _this = this
        const cdWidth = cd.offsetWidth
        
        // Xử lý CD quay và dừng
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimate.pause();

        //Xử lý phóng to / thu nhỏ
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newcdWidth = cdWidth - scrollTop

            cd.style.width = newcdWidth > 0 ? newcdWidth + "px" : 0
            cd.style.opacity = newcdWidth / cdWidth

            // console.log(newcdWidth);
        }
        // Xử lý khi click vào cả hai nút play và listen
        function handlePlay() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        playBtn.onclick = handlePlay;
        playlisten.onclick = handlePlay;
        // icon.onclick = handlePlay;
        
        
        //Khi hát được play 
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing')
            if (window.innerWidth <= 600) {
                cdThumbAnimate.play();
            }else{
                cdThumbAnimate.pause();
            }
        }
        //Khi song bi pause
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        //khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        //Xử lý khi tua song
        progress.onchange = function(e){
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        // Xử lý time audio
        // Xác định sự kiện "loadedmetadata"
        audio.addEventListener('loadedmetadata', function() {
            // Đặt thời gian hiện tại của audio là 0 (bắt đầu từ đầu)
            audio.currentTime = 0;

            // Cập nhật giao diện người dùng dựa trên thời gian hiện tại mới
            updateUI();
        });

        // Thêm sự kiện "ontimeupdate" cho audio
        audio.ontimeupdate = function(){
            // Cập nhật giao diện người dùng dựa trên thời gian hiện tại mới
            updateUI();
        }

        // Hàm cập nhật giao diện người dùng
        function updateUI() {
            progress.value = Math.floor(audio.currentTime);
            progress.max = Math.floor(audio.duration);

            let secondCurrent = Math.floor(audio.currentTime) % 60;
            let minuteCurrent = Math.floor(Math.floor(audio.currentTime) / 60);
            let secondLeft = (Math.floor(audio.duration) - Math.floor(audio.currentTime)) % 60;
            let minuteLeft = Math.floor((Math.floor(audio.duration) - Math.floor(audio.currentTime)) / 60);

            let currentDuration, durationLeft;

            currentDuration = secondCurrent < 10 ? `${minuteCurrent}:0${secondCurrent}` : `${minuteCurrent}:${secondCurrent}`;
            durationLeft = secondLeft < 10 ? `-${minuteLeft}:0${secondLeft}` : `-${minuteLeft}:${secondLeft}`;

            currentTime.innerText = currentDuration;
            duration.innerText = durationLeft;
            progress.style.background = `linear-gradient(to right, var(--color-theme) ${progress.value / progress.max * 100}%, #4d4d4d ${progress.value / progress.max * 100}%)`;
        }

        
        //khi next song
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            } else{
                _this.prevSong()
            }
            audio.play()
        }

        // Khi Random xu ly
        randomBtn.onclick = function(e){
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Xử lý lặp lại một bài hát
        repeatBtn.onclick = function(e){
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        //Xử lý next song khi radio ended
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else{
                audio.click()
            }
        }

        //Xử lý volumn
        progress.oninput = function(){
            let sliderValue = progress.value;
            progress.style.background = `linear-gradient(to right, var(--color-theme) ${sliderValue}%, #4d4d4d ${sliderValue}%)`;
            audio.currentTime = progress.value;
        }

        volume.oninput = function(){
            let sliderValue = volume.value;
            volume.style.background = `linear-gradient(to right, var(--color-theme) ${sliderValue}%, #4d4d4d ${sliderValue}%)`;
        }

        mute.onclick = function(){
            audio.volume = 0;
            $('.playbar__volumne').classList.add('mute');
            volumeProgress.value = 0;
            volumeProgress.style.background = `linear-gradient(to right, var(--color-theme) ${0}%, #4d4d4d ${0}%)`;
        }

        unmute.onclick = function(){
            audio.volume = _this.volumeAmount;
            $('.playbar__volumne').classList.remove('mute');
            volumeProgress.value = _this.volumeAmount * 100;
            volumeProgress.style.background = `linear-gradient(to right, var(--color-theme) ${_this.volumeAmount * 100}%, #4d4d4d ${_this.volumeAmount * 100}%)`;
        }

        volumeProgress.onchange = function(){
           
            audio.volume = volumeProgress.value / 100;

            if(volumeProgress.value == 0){
                if(!$('.playbar__volumne').classList.contains('mute')){
                    $('.playbar__volumne').classList.add('mute');
                }
            }
            else{
                _this.volumeAmount = volumeProgress.value / 100;
                if($('.playbar__volumne').classList.contains('mute')){
                    $('.playbar__volumne').classList.remove('mute');
                }         
            }
        }

        //Xử lý sự kiện click vào items pop
        pop.onclick = function(){
            // _this.isgenre = !_this.isgenre
            // _this.setConfig('isgenre', _this.isgenre)
            items.classList.add('active')
            pop.classList.add('active')
        }
        //Xử lý sự kiện click vào items beat
        beat.onclick = function(e){
            // _this.isgenre = !_this.isgenre
            // _this.setConfig('isgenre', _this.isgenre)
            items.classList.add('active')
            // beat.classList.add('active', _this.isgenre)
            beat.classList.add('active')
        }

        // Xử lý sự kiện click see all
        seeall.onclick = function(){
            items.classList.remove('active')
            pop.classList.remove('active', _this.isgenre)
            beat.classList.remove('active', _this.isgenre)
        }

        // Lắng nghe hành vi click vào playlist
        playlist.addEventListener('click', function(e) {
            const songNode = e.target.closest('.item:not(.active)');
            if (songNode || !e.target.closest('info')) { 
                //Xử lý click vào playlist
                if (songNode) {
                    console.log(songNode.dataset.index);
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    // _this.renderlistpop();
                    // _this.renderlistbeat();
                    audio.play();
                }
                // Xử lý khi click vào song option
                if (e.target.closest('.option')) {
                    // Code xử lý khi click vào song option
                }
            }
        });

        // Lắng nghe hành vi click vào listmusic pop
        poplist.addEventListener('click', function(e) {
            const songpop = e.target.closest('.itemlist:not(.active)');
            if (songpop) { 
                //Xử lý click vào danh sách pop
                const selectedIndex = Number(songpop.dataset.songIndex);
                _this.currentIndex = selectedIndex;
                const selectedSong = poplist[selectedIndex];
                _this.renderlistpop();
                audio.play();
                _this.loadCurrentSong(selectedSong);
                
            }
        });

        // Lắng nghe hành vi click vào listmusic beat
        beatlist.addEventListener('click', function(e) {
            const songbeat = e.target.closest('.itemlist:not(.active)');
            if (songbeat) { 
                //Xử lý click vào danh sách beat
                const selectedIndex = Number(songbeat.dataset.songIndex);
                _this.currentIndex = selectedIndex;
                const selectedSong = beatlist[selectedIndex];
                _this.loadCurrentSong(selectedSong);
                _this.renderlistbeat();
                audio.play();
            }
        });

    },

    // Kéo tới active song
    scrollToActiveSong: function(){
        setTimeout(() => {
            $('.song.active').scroollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        }, 500)      
    },

    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        righting.textContent = this.currentSong.name
        leftimg.style.backgroundImage = `url('${this.currentSong.image}')`
        songname.textContent = this.currentSong.name
        lyricsong.innerHTML = this.currentSong.lyrics
        // console.log(heading, cdThumb, audio)
    },

    // loadCurrentImg: function(){
        
    // },

    loadConfig: function(){
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },

    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function(){
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    playRandomSong: function(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start: function(){
        //Gán cấu hình vào config app
        this.loadConfig()

        // Định nghĩa thuộc tính cho Object
        this.defineProperties()
        
        // Lấy ra bài hát
        this.render()

        // Lấy bài hát trong list music
        this.renderlistpop()
        this.renderlistbeat()
        
        //Load thông tin bài hát bên trái
        // this.loadCurrentImg()

        // Tải thông tin bài hát vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        
        // Lắng nghe sự kiện / Sử lý các sự kiện DOM events
        this.handleEvents()

        //Hiển thị trạng thái ban đầu của button repeat và random
        repeatBtn.classList.toggle('active', _this.isRepeat)
        randomBtn.classList.toggle('active', _this.isRandom)
    }
}
app.start();
