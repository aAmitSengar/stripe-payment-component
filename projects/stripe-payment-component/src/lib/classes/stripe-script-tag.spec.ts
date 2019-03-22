//import { Component, NgModule } from '@angular/core';
//import { inject, ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StripeScriptTag } from "./stripe-script-tag"
import { AppConfig } from '../settings/sp.config.module';
describe('StripeScriptTag', () => {

  it('inits', ()=>{
    expect(StripeScriptTag).not.toBeNull();
    expect(new StripeScriptTag(new AppConfig())).not.toBeNull();
  })
})
