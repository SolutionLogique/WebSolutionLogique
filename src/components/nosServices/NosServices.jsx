import "./services.scss";
import $ from "jquery";

function NosServices() {
  $(".tab").click(function () {
    $(".tab").removeClass("actif");
    $(this).addClass("actif");
    $(".content").removeClass("actif");
  });

  $("#tab1").click(function () {
    $("#content1").addClass("actif");
  });

  $("#tab2").click(function () {
    $("#content2").addClass("actif");
  });

  $("#tab3").click(function () {
    $("#content3").addClass("actif");
  });

  $("#tab4").click(function () {
    $("#content4").addClass("actif");
  });

  return (
    <div className="container">
      <div className="services_tabs">
        <div className="tabs">
          <div className="tab actif" id="tab1">
            Logiciels
          </div>
          <div className="tab" id="tab2">
            Téléphonie IP
          </div>
          <div className="tab" id="tab3">
            Vidéo IP
          </div>
          <div className="tab" id="tab4">
            Site Internet
          </div>
        </div>
        <div className="content actif" id="content1">
        <h1 className="title_content">Logiciels</h1>
        <p>
          Dignissim integer ut convallis nisl bibendum parturient vivamus leo
          sociis malesuada consectetur nullam a tincidunt ullamcorper a eros
          molestie phasellus nec nostra velit mi leo orci a convallis
          torquent.Nunc a dapibus mi hac at a libero eu lectus inceptos a
          viverra at feugiat.
        </p>
      </div>
      <div className="content" id="content2">
        <h1 className="title_content">Téléphonie IP</h1>
        <p>
          Dignissim integer ut convallis nisl bibendum parturient vivamus leo
          sociis malesuada consectetur nullam a tincidunt ullamcorper a eros
          molestie phasellus nec nostra velit mi leo orci a convallis
          torquent.Nunc a dapibus mi hac at a libero eu lectus inceptos a
          viverra at feugiat.
        </p>
      </div>
      <div className="content" id="content3">
        <h1 className="title_content">Vidéo IP</h1>
        <p>
          Dignissim integer ut convallis nisl bibendum parturient vivamus leo
          sociis malesuada consectetur nullam a tincidunt ullamcorper a eros
          molestie phasellus nec nostra velit mi leo orci a convallis
          torquent.Nunc a dapibus mi hac at a libero eu lectus inceptos a
          viverra at feugiat.
        </p>
      </div>
      <div className="content" id="content4">
        <h1 className="title_content">Site Internet</h1>
        <p>
          Dignissim integer ut convallis nisl bibendum parturient vivamus leo
          sociis malesuada consectetur nullam a tincidunt ullamcorper a eros
          molestie phasellus nec nostra velit mi leo orci a convallis
          torquent.Nunc a dapibus mi hac at a libero eu lectus inceptos a
          viverra at feugiat.
        </p>
      </div>
      </div>

    </div>
  );
}

export default NosServices;
