quotes = [{
    quote:"변화를 만들어내는 것은 지식이 아니라 행동이다.",
    name: "이준익"
},{
    quote:"우리는 옷을 입는 것이 아닌 태도를 입는 것이다.",
    name: "베트멍"
},{
    quote:"하나의 영역에 갇혀 있는 것은 바람직하지 않다고 생각한다.",
    name: "닉 나이트"
},{
    quote:"모든 사진은 당신이 쉽게 가볼 수 없는 장소로 당신을 이끈다.",
    name: "닉 나이트"
},{
    quote:"나는 아름다움을 정의내리지 않는다.",
    name: "닉나이트"
},{
    quote:"모든 접촉은 흔적을 남긴다.",
    name: "에드몽 로카드"
},{
    quote:"여름의 한가운데에 우리가 있었다.",
    name: "백이진"
},{
    quote:"늘 그랬던 것처럼 그냥 내가 하고 싶은 펜싱을 보여줄 거야",
    name: "나희도"
},{
    quote:"우리 가끔 이렇게 놀자",
    name: "나희도"
},{
    quote:"나 널 가져야겠어!",
    name: "나희도"
}]
const t_quote = document.querySelector("#quote")
const text = t_quote.querySelector("#quote span:first-child")
const person = t_quote.querySelector("#quote span:last-child")
let number = Math.round(Math.random()*quotes.length) -1

text.innerText = quotes[number].quote
person.innerText = quotes[number].name