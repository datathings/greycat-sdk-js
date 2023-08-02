// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as $std from '../index.js';
import * as std_n from '../../std_n/index.js';

// module: runtime.gcl
export class UserCredential extends $sdk.GCObject {
  static readonly _type = 'runtime::UserCredential';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_offset(): bigint | number {
    return super.get(super.$type.generated_offsets[0]) as bigint | number;
  }
  public set_offset(v: bigint | number) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_pass(): string | null {
    return super.get(super.$type.generated_offsets[1]) as string | null;
  }
  public set_pass(v: string | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
  static create($g: $sdk.GreyCat, offset: bigint | number, pass: string | null): UserCredential {
    return new UserCredential($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[39], offset, pass);
  }
}

export class SecurityPolicy extends $sdk.GCObject {
  static readonly _type = 'runtime::SecurityPolicy';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_entities(): Array<$std.runtime.SecurityEntity> {
    return super.get(super.$type.generated_offsets[0]) as Array<$std.runtime.SecurityEntity>;
  }
  public set_entities(v: Array<$std.runtime.SecurityEntity>) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_credentials(): Map<string, $std.runtime.UserCredential> {
    return super.get(super.$type.generated_offsets[1]) as Map<string, $std.runtime.UserCredential>;
  }
  public set_credentials(v: Map<string, $std.runtime.UserCredential>) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_roles(): Map<string, $std.runtime.UserRole> {
    return super.get(super.$type.generated_offsets[2]) as Map<string, $std.runtime.UserRole>;
  }
  public set_roles(v: Map<string, $std.runtime.UserRole>) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_fields(): $std.runtime.SecurityFields | null {
    return super.get(super.$type.generated_offsets[3]) as $std.runtime.SecurityFields | null;
  }
  public set_fields(v: $std.runtime.SecurityFields | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  async permissions($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<string>> {
    return $g.call('runtime::SecurityPolicy::permissions', undefined, $signal);
  }
  static create($g: $sdk.GreyCat, entities: Array<$std.runtime.SecurityEntity>, credentials: Map<string, $std.runtime.UserCredential>, roles: Map<string, $std.runtime.UserRole>, fields: $std.runtime.SecurityFields | null): SecurityPolicy {
    return new SecurityPolicy($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[40], entities, credentials, roles, fields);
  }
}

export class UserGroupPolicyType extends $sdk.GCEnum {
  static readonly _type = 'runtime::UserGroupPolicyType';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static read($g: $sdk.GreyCat): $std.runtime.UserGroupPolicyType {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[41];
    return t.enum_values![t.generated_offsets[0]] as $std.runtime.UserGroupPolicyType;
  }
  public static write($g: $sdk.GreyCat): $std.runtime.UserGroupPolicyType {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[41];
    return t.enum_values![t.generated_offsets[1]] as $std.runtime.UserGroupPolicyType;
  }
  public static execute($g: $sdk.GreyCat): $std.runtime.UserGroupPolicyType {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[41];
    return t.enum_values![t.generated_offsets[2]] as $std.runtime.UserGroupPolicyType;
  }
  static create($g: $sdk.GreyCat): UserGroupPolicyType {
    return new UserGroupPolicyType($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[41]);
  }
}

export class Task extends $sdk.GCObject {
  static readonly _type = 'runtime::Task';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_id(): bigint | number {
    return super.get(super.$type.generated_offsets[0]) as bigint | number;
  }
  public set_id(v: bigint | number) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_user(): bigint | number {
    return super.get(super.$type.generated_offsets[1]) as bigint | number;
  }
  public set_user(v: bigint | number) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_parent(): bigint | number | null {
    return super.get(super.$type.generated_offsets[2]) as bigint | number | null;
  }
  public set_parent(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_mod(): string | null {
    return super.get(super.$type.generated_offsets[3]) as string | null;
  }
  public set_mod(v: string | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_type(): string | null {
    return super.get(super.$type.generated_offsets[4]) as string | null;
  }
  public set_type(v: string | null) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_fun(): string | null {
    return super.get(super.$type.generated_offsets[5]) as string | null;
  }
  public set_fun(v: string | null) {
    super.set(super.$type.generated_offsets[5], v);
  }
  public get_creation(): $sdk.std.core.time {
    return super.get(super.$type.generated_offsets[6]) as $sdk.std.core.time;
  }
  public set_creation(v: $sdk.std.core.time) {
    super.set(super.$type.generated_offsets[6], v);
  }
  public get_status(): $std.runtime.TaskStatus {
    return super.get(super.$type.generated_offsets[7]) as $std.runtime.TaskStatus;
  }
  public set_status(v: $std.runtime.TaskStatus) {
    super.set(super.$type.generated_offsets[7], v);
  }
  public get_start(): $sdk.std.core.time | null {
    return super.get(super.$type.generated_offsets[8]) as $sdk.std.core.time | null;
  }
  public set_start(v: $sdk.std.core.time | null) {
    super.set(super.$type.generated_offsets[8], v);
  }
  public get_progress(): number | null {
    return super.get(super.$type.generated_offsets[9]) as number | null;
  }
  public set_progress(v: number | null) {
    super.set(super.$type.generated_offsets[9], v);
  }
  public get_remaining(): $sdk.std.core.duration | null {
    return super.get(super.$type.generated_offsets[10]) as $sdk.std.core.duration | null;
  }
  public set_remaining(v: $sdk.std.core.duration | null) {
    super.set(super.$type.generated_offsets[10], v);
  }
  public get_duration(): $sdk.std.core.duration | null {
    return super.get(super.$type.generated_offsets[11]) as $sdk.std.core.duration | null;
  }
  public set_duration(v: $sdk.std.core.duration | null) {
    super.set(super.$type.generated_offsets[11], v);
  }
  public get_sub_waiting(): bigint | number | null {
    return super.get(super.$type.generated_offsets[12]) as bigint | number | null;
  }
  public set_sub_waiting(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[12], v);
  }
  public get_sub_tasks_all(): bigint | number | null {
    return super.get(super.$type.generated_offsets[13]) as bigint | number | null;
  }
  public set_sub_tasks_all(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[13], v);
  }
  async running($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<$std.runtime.Task>> {
    return $g.call('runtime::Task::running', undefined, $signal);
  }
  async history($g: $sdk.GreyCat, offset: bigint | number, max: bigint | number, $signal?: AbortSignal): Promise<Array<$std.runtime.Task>> {
    return $g.call('runtime::Task::history', [offset, max], $signal);
  }
  async cancel($g: $sdk.GreyCat, task_id: bigint | number, $signal?: AbortSignal): Promise<boolean> {
    return $g.call('runtime::Task::cancel', [task_id], $signal);
  }
  async info($g: $sdk.GreyCat, user_id: bigint | number, task_id: bigint | number, $signal?: AbortSignal): Promise<$std.runtime.Task | null> {
    return $g.call('runtime::Task::info', [user_id, task_id], $signal);
  }
  static create($g: $sdk.GreyCat, id: bigint | number, user: bigint | number, parent: bigint | number | null, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, status: $std.runtime.TaskStatus, start: $sdk.std.core.time | null, progress: number | null, remaining: $sdk.std.core.duration | null, duration: $sdk.std.core.duration | null, sub_waiting: bigint | number | null, sub_tasks_all: bigint | number | null): Task {
    return new Task($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[42], id, user, parent, mod, type, fun, creation, status, start, progress, remaining, duration, sub_waiting, sub_tasks_all);
  }
}

export class User extends $sdk.GCObject {
  static readonly _type = 'runtime::User';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_id(): bigint | number {
    return super.get(super.$type.generated_offsets[0]) as bigint | number;
  }
  public set_id(v: bigint | number) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_name(): string {
    return super.get(super.$type.generated_offsets[1]) as string;
  }
  public set_name(v: string) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_activated(): boolean {
    return super.get(super.$type.generated_offsets[2]) as boolean;
  }
  public set_activated(v: boolean) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_full_name(): string | null {
    return super.get(super.$type.generated_offsets[3]) as string | null;
  }
  public set_full_name(v: string | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_email(): string | null {
    return super.get(super.$type.generated_offsets[4]) as string | null;
  }
  public set_email(v: string | null) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_role(): string | null {
    return super.get(super.$type.generated_offsets[5]) as string | null;
  }
  public set_role(v: string | null) {
    super.set(super.$type.generated_offsets[5], v);
  }
  public get_permissions_flags(): bigint | number | null {
    return super.get(super.$type.generated_offsets[6]) as bigint | number | null;
  }
  public set_permissions_flags(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[6], v);
  }
  public get_groups(): Array<$std.runtime.UserGroupPolicy> | null {
    return super.get(super.$type.generated_offsets[7]) as Array<$std.runtime.UserGroupPolicy> | null;
  }
  public set_groups(v: Array<$std.runtime.UserGroupPolicy> | null) {
    super.set(super.$type.generated_offsets[7], v);
  }
  public get_groups_flags(): bigint | number | null {
    return super.get(super.$type.generated_offsets[8]) as bigint | number | null;
  }
  public set_groups_flags(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[8], v);
  }
  public get_external(): boolean {
    return super.get(super.$type.generated_offsets[9]) as boolean;
  }
  public set_external(v: boolean) {
    super.set(super.$type.generated_offsets[9], v);
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<$std.runtime.SecurityEntity>> {
    return $g.call('runtime::SecurityEntity::all', undefined, $signal);
  }
  async set_($g: $sdk.GreyCat, entity: $std.runtime.SecurityEntity, $signal?: AbortSignal): Promise<bigint | number | null> {
    return $g.call('runtime::SecurityEntity::set_', [entity], $signal);
  }
  async login($g: $sdk.GreyCat, credentials: string, use_cookie: boolean, $signal?: AbortSignal): Promise<string> {
    return $g.call('runtime::User::login', [credentials, use_cookie], $signal);
  }
  async tokenLogin($g: $sdk.GreyCat, token: string, use_cookie: boolean, $signal?: AbortSignal): Promise<string> {
    return $g.call('runtime::User::tokenLogin', [token, use_cookie], $signal);
  }
  async renew($g: $sdk.GreyCat, use_cookie: boolean, $signal?: AbortSignal): Promise<string> {
    return $g.call('runtime::User::renew', [use_cookie], $signal);
  }
  async logout($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::User::logout', undefined, $signal);
  }
  async current($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<bigint | number> {
    return $g.call('runtime::User::current', undefined, $signal);
  }
  async me($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<$std.runtime.User> {
    return $g.call('runtime::User::me', undefined, $signal);
  }
  async permissions($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<string>> {
    return $g.call('runtime::User::permissions', undefined, $signal);
  }
  async setPassword($g: $sdk.GreyCat, name: string, pass: string, $signal?: AbortSignal): Promise<boolean> {
    return $g.call('runtime::User::setPassword', [name, pass], $signal);
  }
  async getToken($g: $sdk.GreyCat, id: bigint | number, $signal?: AbortSignal): Promise<string> {
    return $g.call('runtime::User::getToken', [id], $signal);
  }
  static create($g: $sdk.GreyCat, id: bigint | number, name: string, activated: boolean, full_name: string | null, email: string | null, role: string | null, permissions_flags: bigint | number | null, groups: Array<$std.runtime.UserGroupPolicy> | null, groups_flags: bigint | number | null, external: boolean): User {
    return new User($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[43], id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external);
  }
}

export class System extends $sdk.GCObject {
  static readonly _type = 'runtime::System';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): System {
    return new System($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[44]);
  }
}

export class UserGroupPolicy extends $sdk.GCObject {
  static readonly _type = 'runtime::UserGroupPolicy';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_group_id(): bigint | number {
    return super.get(super.$type.generated_offsets[0]) as bigint | number;
  }
  public set_group_id(v: bigint | number) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_type(): $std.runtime.UserGroupPolicyType {
    return super.get(super.$type.generated_offsets[1]) as $std.runtime.UserGroupPolicyType;
  }
  public set_type(v: $std.runtime.UserGroupPolicyType) {
    super.set(super.$type.generated_offsets[1], v);
  }
  static create($g: $sdk.GreyCat, group_id: bigint | number, type: $std.runtime.UserGroupPolicyType): UserGroupPolicy {
    return new UserGroupPolicy($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[45], group_id, type);
  }
}

export class SecurityFields extends $sdk.GCObject {
  static readonly _type = 'runtime::SecurityFields';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_email(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_email(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[1]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_first_name(): string | null {
    return super.get(super.$type.generated_offsets[2]) as string | null;
  }
  public set_first_name(v: string | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_last_name(): string | null {
    return super.get(super.$type.generated_offsets[3]) as string | null;
  }
  public set_last_name(v: string | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_roles(): Map<string, string> | null {
    return super.get(super.$type.generated_offsets[4]) as Map<string, string> | null;
  }
  public set_roles(v: Map<string, string> | null) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_groups(): Map<string, string> | null {
    return super.get(super.$type.generated_offsets[5]) as Map<string, string> | null;
  }
  public set_groups(v: Map<string, string> | null) {
    super.set(super.$type.generated_offsets[5], v);
  }
  async set_($g: $sdk.GreyCat, f: $std.runtime.SecurityFields, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::SecurityFields::set_', [f], $signal);
  }
  async get_($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<$std.runtime.SecurityFields | null> {
    return $g.call('runtime::SecurityFields::get_', undefined, $signal);
  }
  static create($g: $sdk.GreyCat, email: string | null, name: string | null, first_name: string | null, last_name: string | null, roles: Map<string, string> | null, groups: Map<string, string> | null): SecurityFields {
    return new SecurityFields($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[46], email, name, first_name, last_name, roles, groups);
  }
}

export class OpenIDConnect extends $sdk.GCObject {
  static readonly _type = 'runtime::OpenIDConnect';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_url(): string {
    return super.get(super.$type.generated_offsets[0]) as string;
  }
  public set_url(v: string) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_clientId(): string {
    return super.get(super.$type.generated_offsets[1]) as string;
  }
  public set_clientId(v: string) {
    super.set(super.$type.generated_offsets[1], v);
  }
  async config($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<$std.runtime.OpenIDConnect | null> {
    return $g.call('runtime::OpenIDConnect::config', undefined, $signal);
  }
  static create($g: $sdk.GreyCat, url: string, clientId: string): OpenIDConnect {
    return new OpenIDConnect($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[47], url, clientId);
  }
}

export class PeriodicTask extends $sdk.GCObject {
  static readonly _type = 'runtime::PeriodicTask';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_name(): string {
    return super.get(super.$type.generated_offsets[0]) as string;
  }
  public set_name(v: string) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_user_id(): bigint | number {
    return super.get(super.$type.generated_offsets[1]) as bigint | number;
  }
  public set_user_id(v: bigint | number) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_args(): string | null {
    return super.get(super.$type.generated_offsets[2]) as string | null;
  }
  public set_args(v: string | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_start(): $sdk.std.core.time {
    return super.get(super.$type.generated_offsets[3]) as $sdk.std.core.time;
  }
  public set_start(v: $sdk.std.core.time) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_every(): $sdk.std.core.duration {
    return super.get(super.$type.generated_offsets[4]) as $sdk.std.core.duration;
  }
  public set_every(v: $sdk.std.core.duration) {
    super.set(super.$type.generated_offsets[4], v);
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<$std.runtime.PeriodicTask>> {
    return $g.call('runtime::PeriodicTask::all', undefined, $signal);
  }
  async set_($g: $sdk.GreyCat, tasks: Array<$std.runtime.PeriodicTask>, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::PeriodicTask::set_', [tasks], $signal);
  }
  static create($g: $sdk.GreyCat, name: string, user_id: bigint | number, args: string | null, start: $sdk.std.core.time, every: $sdk.std.core.duration): PeriodicTask {
    return new PeriodicTask($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[48], name, user_id, args, start, every);
  }
}

export class UserGroup extends $sdk.GCObject {
  static readonly _type = 'runtime::UserGroup';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_id(): bigint | number {
    return super.get(super.$type.generated_offsets[0]) as bigint | number;
  }
  public set_id(v: bigint | number) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_name(): string {
    return super.get(super.$type.generated_offsets[1]) as string;
  }
  public set_name(v: string) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_activated(): boolean {
    return super.get(super.$type.generated_offsets[2]) as boolean;
  }
  public set_activated(v: boolean) {
    super.set(super.$type.generated_offsets[2], v);
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<$std.runtime.SecurityEntity>> {
    return $g.call('runtime::SecurityEntity::all', undefined, $signal);
  }
  async set_($g: $sdk.GreyCat, entity: $std.runtime.SecurityEntity, $signal?: AbortSignal): Promise<bigint | number | null> {
    return $g.call('runtime::SecurityEntity::set_', [entity], $signal);
  }
  static create($g: $sdk.GreyCat, id: bigint | number, name: string, activated: boolean): UserGroup {
    return new UserGroup($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[49], id, name, activated);
  }
}

export class StoreStat extends $sdk.GCObject {
  static readonly _type = 'runtime::StoreStat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_capacity_bytes(): bigint | number {
    return super.get(super.$type.generated_offsets[0]) as bigint | number;
  }
  public set_capacity_bytes(v: bigint | number) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_allocated_bytes(): bigint | number {
    return super.get(super.$type.generated_offsets[1]) as bigint | number;
  }
  public set_allocated_bytes(v: bigint | number) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_allocated_ratio(): number {
    return super.get(super.$type.generated_offsets[2]) as number;
  }
  public set_allocated_ratio(v: number) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_remained_bytes(): bigint | number {
    return super.get(super.$type.generated_offsets[3]) as bigint | number;
  }
  public set_remained_bytes(v: bigint | number) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_remained_ratio(): number {
    return super.get(super.$type.generated_offsets[4]) as number;
  }
  public set_remained_ratio(v: number) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_used_bytes(): bigint | number {
    return super.get(super.$type.generated_offsets[5]) as bigint | number;
  }
  public set_used_bytes(v: bigint | number) {
    super.set(super.$type.generated_offsets[5], v);
  }
  public get_used_ratio(): number {
    return super.get(super.$type.generated_offsets[6]) as number;
  }
  public set_used_ratio(v: number) {
    super.set(super.$type.generated_offsets[6], v);
  }
  public get_available_bytes(): bigint | number {
    return super.get(super.$type.generated_offsets[7]) as bigint | number;
  }
  public set_available_bytes(v: bigint | number) {
    super.set(super.$type.generated_offsets[7], v);
  }
  public get_available_ratio(): number {
    return super.get(super.$type.generated_offsets[8]) as number;
  }
  public set_available_ratio(v: number) {
    super.set(super.$type.generated_offsets[8], v);
  }
  static create($g: $sdk.GreyCat, capacity_bytes: bigint | number, allocated_bytes: bigint | number, allocated_ratio: number, remained_bytes: bigint | number, remained_ratio: number, used_bytes: bigint | number, used_ratio: number, available_bytes: bigint | number, available_ratio: number): StoreStat {
    return new StoreStat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[50], capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio);
  }
}

export class Runtime extends $sdk.GCObject {
  static readonly _type = 'runtime::Runtime';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  async info($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<$std.runtime.RuntimeInfo> {
    return $g.call('runtime::Runtime::info', undefined, $signal);
  }
  async abi($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::Runtime::abi', undefined, $signal);
  }
  static create($g: $sdk.GreyCat): Runtime {
    return new Runtime($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[51]);
  }
}

export class TaskStatus extends $sdk.GCEnum {
  static readonly _type = 'runtime::TaskStatus';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static empty($g: $sdk.GreyCat): $std.runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[52];
    return t.enum_values![t.generated_offsets[0]] as $std.runtime.TaskStatus;
  }
  public static waiting($g: $sdk.GreyCat): $std.runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[52];
    return t.enum_values![t.generated_offsets[1]] as $std.runtime.TaskStatus;
  }
  public static running($g: $sdk.GreyCat): $std.runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[52];
    return t.enum_values![t.generated_offsets[2]] as $std.runtime.TaskStatus;
  }
  public static cancelled($g: $sdk.GreyCat): $std.runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[52];
    return t.enum_values![t.generated_offsets[3]] as $std.runtime.TaskStatus;
  }
  public static error($g: $sdk.GreyCat): $std.runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[52];
    return t.enum_values![t.generated_offsets[4]] as $std.runtime.TaskStatus;
  }
  public static ended($g: $sdk.GreyCat): $std.runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[52];
    return t.enum_values![t.generated_offsets[5]] as $std.runtime.TaskStatus;
  }
  static create($g: $sdk.GreyCat): TaskStatus {
    return new TaskStatus($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[52]);
  }
}

export class SecurityEntity extends $sdk.GCObject {
  static readonly _type = 'runtime::SecurityEntity';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_id(): bigint | number {
    return super.get(super.$type.generated_offsets[0]) as bigint | number;
  }
  public set_id(v: bigint | number) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_name(): string {
    return super.get(super.$type.generated_offsets[1]) as string;
  }
  public set_name(v: string) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_activated(): boolean {
    return super.get(super.$type.generated_offsets[2]) as boolean;
  }
  public set_activated(v: boolean) {
    super.set(super.$type.generated_offsets[2], v);
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<$std.runtime.SecurityEntity>> {
    return $g.call('runtime::SecurityEntity::all', undefined, $signal);
  }
  async set_($g: $sdk.GreyCat, entity: $std.runtime.SecurityEntity, $signal?: AbortSignal): Promise<bigint | number | null> {
    return $g.call('runtime::SecurityEntity::set_', [entity], $signal);
  }
  static create($g: $sdk.GreyCat, id: bigint | number, name: string, activated: boolean): SecurityEntity {
    return new SecurityEntity($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[53], id, name, activated);
  }
}

export class UserRole extends $sdk.GCObject {
  static readonly _type = 'runtime::UserRole';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_name(): string {
    return super.get(super.$type.generated_offsets[0]) as string;
  }
  public set_name(v: string) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_permissions(): Array<string> {
    return super.get(super.$type.generated_offsets[1]) as Array<string>;
  }
  public set_permissions(v: Array<string>) {
    super.set(super.$type.generated_offsets[1], v);
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<$std.runtime.UserRole>> {
    return $g.call('runtime::UserRole::all', undefined, $signal);
  }
  async remove($g: $sdk.GreyCat, name: string, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::UserRole::remove', [name], $signal);
  }
  async set_($g: $sdk.GreyCat, value: $std.runtime.UserRole, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::UserRole::set_', [value], $signal);
  }
  static create($g: $sdk.GreyCat, name: string, permissions: Array<string>): UserRole {
    return new UserRole($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[54], name, permissions);
  }
}

export class RuntimeInfo extends $sdk.GCObject {
  static readonly _type = 'runtime::RuntimeInfo';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_version(): string {
    return super.get(super.$type.generated_offsets[0]) as string;
  }
  public set_version(v: string) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_arch(): string {
    return super.get(super.$type.generated_offsets[1]) as string;
  }
  public set_arch(v: string) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_timezone(): $std.core.TimeZone {
    return super.get(super.$type.generated_offsets[2]) as $std.core.TimeZone;
  }
  public set_timezone(v: $std.core.TimeZone) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_license(): $std.runtime.License {
    return super.get(super.$type.generated_offsets[3]) as $std.runtime.License;
  }
  public set_license(v: $std.runtime.License) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_io_threads(): bigint | number {
    return super.get(super.$type.generated_offsets[4]) as bigint | number;
  }
  public set_io_threads(v: bigint | number) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_bg_threads(): bigint | number {
    return super.get(super.$type.generated_offsets[5]) as bigint | number;
  }
  public set_bg_threads(v: bigint | number) {
    super.set(super.$type.generated_offsets[5], v);
  }
  public get_fg_threads(): bigint | number {
    return super.get(super.$type.generated_offsets[6]) as bigint | number;
  }
  public set_fg_threads(v: bigint | number) {
    super.set(super.$type.generated_offsets[6], v);
  }
  public get_mem_total(): bigint | number {
    return super.get(super.$type.generated_offsets[7]) as bigint | number;
  }
  public set_mem_total(v: bigint | number) {
    super.set(super.$type.generated_offsets[7], v);
  }
  public get_mem_worker(): bigint | number {
    return super.get(super.$type.generated_offsets[8]) as bigint | number;
  }
  public set_mem_worker(v: bigint | number) {
    super.set(super.$type.generated_offsets[8], v);
  }
  public get_nb_ctx(): bigint | number {
    return super.get(super.$type.generated_offsets[9]) as bigint | number;
  }
  public set_nb_ctx(v: bigint | number) {
    super.set(super.$type.generated_offsets[9], v);
  }
  public get_store_stats(): $std.runtime.StoreStat | null {
    return super.get(super.$type.generated_offsets[10]) as $std.runtime.StoreStat | null;
  }
  public set_store_stats(v: $std.runtime.StoreStat | null) {
    super.set(super.$type.generated_offsets[10], v);
  }
  static create($g: $sdk.GreyCat, version: string, arch: string, timezone: $std.core.TimeZone, license: $std.runtime.License, io_threads: bigint | number, bg_threads: bigint | number, fg_threads: bigint | number, mem_total: bigint | number, mem_worker: bigint | number, nb_ctx: bigint | number, store_stats: $std.runtime.StoreStat | null): RuntimeInfo {
    return new RuntimeInfo($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[55], version, arch, timezone, license, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats);
  }
}

export class License extends $sdk.GCObject {
  static readonly _type = 'runtime::License';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_start(): $sdk.std.core.time {
    return super.get(super.$type.generated_offsets[1]) as $sdk.std.core.time;
  }
  public set_start(v: $sdk.std.core.time) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_end(): $sdk.std.core.time {
    return super.get(super.$type.generated_offsets[2]) as $sdk.std.core.time;
  }
  public set_end(v: $sdk.std.core.time) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_company(): string | null {
    return super.get(super.$type.generated_offsets[3]) as string | null;
  }
  public set_company(v: string | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_max_workers(): bigint | number {
    return super.get(super.$type.generated_offsets[4]) as bigint | number;
  }
  public set_max_workers(v: bigint | number) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_max_memory(): bigint | number {
    return super.get(super.$type.generated_offsets[5]) as bigint | number;
  }
  public set_max_memory(v: bigint | number) {
    super.set(super.$type.generated_offsets[5], v);
  }
  public get_max_store(): bigint | number {
    return super.get(super.$type.generated_offsets[6]) as bigint | number;
  }
  public set_max_store(v: bigint | number) {
    super.set(super.$type.generated_offsets[6], v);
  }
  public get_extra_1(): bigint | number | null {
    return super.get(super.$type.generated_offsets[7]) as bigint | number | null;
  }
  public set_extra_1(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[7], v);
  }
  public get_extra_2(): bigint | number | null {
    return super.get(super.$type.generated_offsets[8]) as bigint | number | null;
  }
  public set_extra_2(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[8], v);
  }
  public get_extra_3(): bigint | number | null {
    return super.get(super.$type.generated_offsets[9]) as bigint | number | null;
  }
  public set_extra_3(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[9], v);
  }
  public get_extra_4(): bigint | number | null {
    return super.get(super.$type.generated_offsets[10]) as bigint | number | null;
  }
  public set_extra_4(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[10], v);
  }
  static create($g: $sdk.GreyCat, name: string | null, start: $sdk.std.core.time, end: $sdk.std.core.time, company: string | null, max_workers: bigint | number, max_memory: bigint | number, max_store: bigint | number, extra_1: bigint | number | null, extra_2: bigint | number | null, extra_3: bigint | number | null, extra_4: bigint | number | null): License {
    return new License($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[56], name, start, end, company, max_workers, max_memory, max_store, extra_1, extra_2, extra_3, extra_4);
  }
}

