import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-5">
            <h3
              className="mb-4"
              style={{ marginTop: "10rem", textAlign: "center" }}
            >
              BİZ KİMİZ?
            </h3>

            <p>
              Wease markasını bünyesinde barındıran Infotec Grubu olarak 20
              yıldır <b>işimiz de gücümüz de sağlık.</b>
            </p>
            <p>
              Yazılım, donanım ve danışmanlık alanlarının tamamını kapsayarak
              sağlık sektörüne özgü geniş kapsamlı ve entegre çözümler
              sunuyoruz.
            </p>
            <p>
              Yazılım çözümlerinde, Hastane Bilgi Yönetim Sistemleri, Görüntü
              Arşivleme ve İletim Sistemleri, Laboratuvar Otomasyonu, Radyoloji
              Bilgi Sistemleri, Stok, Muhasebe, İnsan Kaynakları Otomasyonu gibi
              geniş ürün ailesine hasta adaylarının da etkin yönetim ihtiyacını
              karşılamak üzere lead yönetim çözümü olan "WEASE" ürünü de
              eklenmiştir.
            </p>
            <p>
              Yapay zekâ, makina öğrenmesi, bigdata alanlarında sürdürdüğümüz
              arge çalışmaları ile mevcut ürünlerimizin etkniliğini artırmaya ve
              yeni ürünler geliştirmeye devam ediyoruz.
            </p>

            <br />

            <p className="mt-4">
              <b>Vizyonumuz:</b>
            </p>
            <p>
              Sağlık sektörüne özel kullanıcı dostu, öncü, yenilikçi ve entergre
              çözümler ile insanların hayatını kolaylaştırmak
            </p>
            <p className="mt-4">
              <b>Değerlerimiz:</b>
            </p>
            <ul>
              <li className="aboutlist">İnovasyon</li>
              <li className="aboutlist">Takım Çalışması</li>
              <li className="aboutlist">Dürüstlük</li>
              <li className="aboutlist">Bilgelik</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
