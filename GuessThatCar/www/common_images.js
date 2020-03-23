(function(window, Util, PhotoSwipe)
{
  document.addEventListener('DOMContentLoaded', function()
  {
    var options;
    var instance = PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), options );
  }, false);

}(window, window.Code.Util, window.Code.PhotoSwipe));

function DoHome()
{
  window.location.href = "index.html";
}

function DoMail()
{
  var recipient = "";
  var subject = "Great apps at www.EllieSoft.co.uk";
  var body = "";
  window.open("mailto:" + recipient + "?subject=" + subject + "&body=" + body);
}

function DoFacebook()
{
  window.location.href = "https://www.facebook.com/EllieSoft";
}

function DoTwitter()
{
  window.location.href = "https://twitter.com/#!/EllieSoft";
}
