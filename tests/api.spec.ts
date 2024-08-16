// import { test, expect, Page } from '@playwright/test';



// test.describe.configure({ mode: 'serial' });

// async function getApiResponise(page:Page) {

//   return page.waitForResponse(async(res)=>{
//       if(!res.url().includes("/api/submit")){
//         return false
//       }
//       console.log("monitoring response")
//       const reponseBody = await res.json()
//       return reponseBody.status === "Sucess"
//   })
// }
// test.only('api testing', async ({ page }) => {
//     await page.goto("https://www.google.com/")
//     await page.waitForTimeout(2000)
//     const responsePromise = getApiResponise(page)
//     const reponse = await responsePromise
//     const reponseBody = await reponse.json()
//     console.log(reponseBody)
// });

