import { expect, type Locator, type Page } from '@playwright/test';

export class TeamMemberPage {
    readonly page: Page;
    readonly tblMember: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tblMember = page.locator('//tr[contains(@id, "team")]');
    }

    async goto() {
        await this.page.goto('https://demo.growcrm.io/team');
    }

    // Function to get the member name based on the index
    async getMemberName(index: number): Promise<string | null> {
        const locator = `//tr[${index}]/td[@class="team_col_first_name"]`;
        const name = await this.page.locator(locator).textContent();
        return name;
    }

    // Function to get the member name based on the index
    async getMemberPosition(index: number): Promise<string | null> {
        const locator = `//tr[${index}]/td[@class="team_col_position"]`;
        const position = await this.page.locator(locator).textContent();
        return position;
    }

    // Function to get the member name based on the index
    async getMemberRole(index: number): Promise<string | null> {
        const locator = `//tr[${index}]/td[@class="team_col_role"]`;
        const role = await this.page.locator(locator).textContent();
        return role;
    }

    // Function to get the member name based on the index
    async getMemberEmail(index: number): Promise<string | null> {
        const locator = `//tr[${index}]/td[@class="team_col_email"]`;
        const email = await this.page.locator(locator).textContent()
        return email;
    }

    // Function to get the member name based on the index
    async getMemberPhone(index: number): Promise<string | null> {
        const locator = `//tr[${index}]/td[@class="team_col_phone"]`;
        const phone = await this.page.locator(locator).textContent();
        return phone;
    }

    async getMemberInfo(): Promise<{
        name: string | null,
        position: string | null,
        role: string | null,
        email: string | null,
        phone: string | null
    }[]> {
        // Initialize an array to hold member information
        let members: {
            name: string | null,
            position: string | null,
            role: string | null,
            email: string | null,
            phone: string | null
        }[] = [];

        const totalCount = await this.getTotalRecord()
        for (let i = 1; i <= totalCount; i++) {
            await this.page.waitForTimeout(1000);

            // Get member name by awaiting the function call
            const memberName = await this.getMemberName(i);
            const memberRole = await this.getMemberRole(i)
            const memberPosition = await this.getMemberPosition(i)
            const memberEmail = await this.getMemberEmail(i)
            const memberPhone = await this.getMemberPhone(i)

            // Push the member info to the array
            let memberInfo = {
                name: await this.formatText(memberName),
                position: await this.formatText(memberPosition),
                role: await this.formatText(memberRole),
                email: await this.formatText(memberEmail),
                phone: await this.formatText(memberPhone)
            };

            members.push(memberInfo);
            console.log(members[i - 1])

        }
        return members
    }

    async getTotalRecord() {
        return this.tblMember.count();
    }
    async formatText(fullText) {
        return fullText.replace(/\n/g, "").replace(/\s+/g, " ").trim()
    }

}
