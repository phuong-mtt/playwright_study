import { test, expect } from '@playwright/test';
import { CommonApi } from '../api/commonApi';

test.describe.configure({ mode: 'serial' });

const commonApi = new CommonApi

test.only('get list user', async () => {
    const response = await commonApi.getResponseGetList(2)
    const responseBody = await response.json()
    console.log(responseBody.data)
    expect(response.status()).toBe(200)
});

test.only('create user', async () => {
    const requestBody =
    {
        "name": "morpheus",
        "job": "leader"
    }
    const response = await commonApi.getResponseCreateUser(requestBody)
    const responseBody = await response.json()
    expect(response.status()).toBe(201)
    console.log(responseBody.id)
});

