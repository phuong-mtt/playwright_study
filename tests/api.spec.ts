import { test, expect } from '@playwright/test';
import { CommonApi } from '../api/commonApi';

test.describe.configure({ mode: 'serial' });

const commonApi = new CommonApi

test.only('get list user', async () => {
    const response = await commonApi.getResponseGetList(2)
    expect(response.status()).toBe(200)
});

test.only('create user', async () => {
    const requestBody = await commonApi.getRequestBody()
    const response = await commonApi.getResponseCreateUser(requestBody)
    console.log(await response.json())
    expect(response.status()).toBe(201)
});

