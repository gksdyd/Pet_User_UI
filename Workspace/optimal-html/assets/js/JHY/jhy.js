// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
    })()

    function sample6_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("sample6_detailAddress").focus();
            }
        }).open();
    }

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(function(){
        $("#file-area").hide();  
        $("#presentimg").click(function(){
            $("#presentimg1").click();	
        })
    })

    function loadImg(inputFile,num){

        if(inputFile.files.length == 1){
        
            var reader = new FileReader();
        
            reader.readAsDataURL(inputFile.files[0]);
            reader.onload = function(e){
                $("#presentimg").attr("src",e.target.result);
            }
        
            } else {
                $("#presentimg").attr("src",null);
            }
        
    }

    // 페이지 진입 시 기본 값
window.addEventListener('DOMContentLoaded', function() {
    showContent('list');
    showModal('select');
  });
  
  function showContent(content) {
    var contentA = document.getElementById("pet-list");
    var contentB = document.getElementById("pet-register");
    var contentC = document.getElementById("pet-detail");
  
    // 내용 숨김
    contentA.style.display = "none";
    contentB.style.display = "none";
    contentC.style.display = "none";
  
    // 선택한 내용 보이기
    if (content === "list") {
      contentA.style.display = "block";
    } else if (content === "register") {
      contentB.style.display = "block";
    } else if (content === "detail") {
        contentC.style.display = "block";
      }
  }

  function showModal(content) {
    var contentA = document.getElementById("select-destination");
    var contentB = document.getElementById("modify-destination");
    var contentC = document.getElementById("add-destination");
  
    // 내용 숨김
    contentA.style.display = "none";
    contentB.style.display = "none";
    contentC.style.display = "none";
  
    // 선택한 내용 보이기
    if (content === "select") {
      contentA.style.display = "block";
    } else if (content === "modify") {
      contentB.style.display = "block";
    } else if (content === "add") {
        contentC.style.display = "block";
      }
  }