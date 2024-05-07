#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FootballBookingInfraStack } from '../lib/football-booking-infra-stack';

const app = new cdk.App();
new FootballBookingInfraStack(app, 'FootballBookingInfraStack', {
    API_GATEWAY_URL: "https://f8xj4v5uv4.execute-api.eu-west-2.amazonaws.com/prod",
    Region: "eu-west-2"
});