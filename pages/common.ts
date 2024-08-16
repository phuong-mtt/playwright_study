import { test, expect, Page } from '@playwright/test';

export class Common{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async getStatusCode(endPoint: string): Promise<number | boolean> {
        try {
            // Wait for the response with a timeout
            const response = await this.page.waitForResponse(
                async (res) => res.url().includes(endPoint),
                { timeout: 10000 } // 10 seconds timeout
            );
            
            // Return the status code of the response
            return response.status()===200;
        } catch (error) {
            console.error(`Error waiting for response: ${error.message}`);
            return false; // Return undefined if there's an error
        }
    }
}