import { test, expect, Page } from '@playwright/test';
import { TeamMemberPage } from '../pages/teamMemberPage';
import { Common } from '../pages/common'

test.only('get members data', async ({ page }) => {
  const teamMemberPage = new TeamMemberPage(page);
  const commonPage = new Common(page)

  await teamMemberPage.goto()

  commonPage.getStatusCode("/team")

  const memberInfo = await teamMemberPage.getMemberInfo()
  console.log("aaa" + JSON.stringify(memberInfo[0]))

});