/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Field, ID, ObjectType } from 'type-graphql';
import { Email } from './emails';

@ObjectType()
export class Account {
  @Field(type => ID)
  public uid!: string;

  @Field()
  public accountCreated!: number;

  @Field()
  public passwordCreated!: number;

  @Field({ nullable: true })
  public displayName!: string;

  @Field({ nullable: true })
  public avatarUrl!: string;

  @Field({ nullable: true })
  public locale!: string;

  @Field(type => [Email])
  public emails!: Email[];
}
