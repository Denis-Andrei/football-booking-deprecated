#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FootballBookingInfraStack } from '../lib/football-booking-infra-stack';
import {config} from "../config/development";

const app = new cdk.App();
new FootballBookingInfraStack(app, 'FootballBookingInfraStack', {
    // at the moment only for the dev
    ...config
});