// import { MemClient } from "@mem-labs/mem-node";

//import { MemClient } from "./node_modules/@mem-labs/mem-node";
// const memClient = new MemClient({
//   apiAccessToken: ""
// });


let savePage = document.getElementById('savePage');

savePage.addEventListener("click", async () => {
    // Get current active tab
    let [tab] = await chrome.tabs.query({
        active: true, 
        currentWindow: true
    });

    console.log(tab.id)

    //Execute script
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func : SavePage,

    });
})

function SavePage(){
    //get html
    // console.log(document.head.innerHTML)
    console.log(document.body.innerText)

    // memClient.createMem({
    //     content: "Hello there! I am a new mem.",
    //     isRead: true
    //   });
}