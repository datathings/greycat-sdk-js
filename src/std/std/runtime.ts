// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import type { Abi, AbiType, GreyCat } from '../../index.js';
import { GCObject, GCEnum, std_n } from '../../index.js';
import * as std from './index.js';

// module: runtime.gcl
export class SecurityEntity extends GCObject {
  static readonly _type = 'runtime::SecurityEntity';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_id(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_id(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_name(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_activated(): boolean {
    return super.get(super.type.generated_offsets[2]) as boolean;
  }
  public set_activated(v: boolean) {
    super.set(super.type.generated_offsets[2], v);
  }
  async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<std.runtime.SecurityEntity>> {
    return greycat.call('runtime::SecurityEntity::all', undefined, signal);
  }
  async set_(greycat: GreyCat, entity: std.runtime.SecurityEntity, signal?: AbortSignal): Promise<bigint | number | null> {
    return greycat.call('runtime::SecurityEntity::set_', [entity], signal);
  }
  create(abi: Abi, id: bigint | number, name: string, activated: boolean): SecurityEntity {
    return new SecurityEntity(abi.libs_by_name.get(std.name)!.mapped[30], id, name, activated);
  }
}

export class UserRole extends GCObject {
  static readonly _type = 'runtime::UserRole';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_permissions(): Array<string> {
    return super.get(super.type.generated_offsets[1]) as Array<string>;
  }
  public set_permissions(v: Array<string>) {
    super.set(super.type.generated_offsets[1], v);
  }
  async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<std.runtime.UserRole>> {
    return greycat.call('runtime::UserRole::all', undefined, signal);
  }
  async remove(greycat: GreyCat, name: string, signal?: AbortSignal): Promise<unknown> {
    return greycat.call('runtime::UserRole::remove', [name], signal);
  }
  async set_(greycat: GreyCat, value: std.runtime.UserRole, signal?: AbortSignal): Promise<unknown> {
    return greycat.call('runtime::UserRole::set_', [value], signal);
  }
  create(abi: Abi, name: string, permissions: Array<string>): UserRole {
    return new UserRole(abi.libs_by_name.get(std.name)!.mapped[31], name, permissions);
  }
}

export class RuntimeInfo extends GCObject {
  static readonly _type = 'runtime::RuntimeInfo';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_version(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_version(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_arch(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_arch(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_timezone(): std.core.TimeZone {
    return super.get(super.type.generated_offsets[2]) as std.core.TimeZone;
  }
  public set_timezone(v: std.core.TimeZone) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_licence(): std.runtime.Licence {
    return super.get(super.type.generated_offsets[3]) as std.runtime.Licence;
  }
  public set_licence(v: std.runtime.Licence) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_io_threads(): bigint | number {
    return super.get(super.type.generated_offsets[4]) as bigint | number;
  }
  public set_io_threads(v: bigint | number) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_bg_threads(): bigint | number {
    return super.get(super.type.generated_offsets[5]) as bigint | number;
  }
  public set_bg_threads(v: bigint | number) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_fg_threads(): bigint | number {
    return super.get(super.type.generated_offsets[6]) as bigint | number;
  }
  public set_fg_threads(v: bigint | number) {
    super.set(super.type.generated_offsets[6], v);
  }
  public get_mem_total(): bigint | number {
    return super.get(super.type.generated_offsets[7]) as bigint | number;
  }
  public set_mem_total(v: bigint | number) {
    super.set(super.type.generated_offsets[7], v);
  }
  public get_mem_worker(): bigint | number {
    return super.get(super.type.generated_offsets[8]) as bigint | number;
  }
  public set_mem_worker(v: bigint | number) {
    super.set(super.type.generated_offsets[8], v);
  }
  public get_nb_ctx(): bigint | number {
    return super.get(super.type.generated_offsets[9]) as bigint | number;
  }
  public set_nb_ctx(v: bigint | number) {
    super.set(super.type.generated_offsets[9], v);
  }
  public get_store_stats(): std.runtime.StoreStat | null {
    return super.get(super.type.generated_offsets[10]) as std.runtime.StoreStat | null;
  }
  public set_store_stats(v: std.runtime.StoreStat | null) {
    super.set(super.type.generated_offsets[10], v);
  }
  create(abi: Abi, version: string, arch: string, timezone: std.core.TimeZone, licence: std.runtime.Licence, io_threads: bigint | number, bg_threads: bigint | number, fg_threads: bigint | number, mem_total: bigint | number, mem_worker: bigint | number, nb_ctx: bigint | number, store_stats: std.runtime.StoreStat | null): RuntimeInfo {
    return new RuntimeInfo(abi.libs_by_name.get(std.name)!.mapped[32], version, arch, timezone, licence, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats);
  }
}

export class StoreStat extends GCObject {
  static readonly _type = 'runtime::StoreStat';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_capacity_bytes(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_capacity_bytes(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_allocated_bytes(): bigint | number {
    return super.get(super.type.generated_offsets[1]) as bigint | number;
  }
  public set_allocated_bytes(v: bigint | number) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_allocated_ratio(): number {
    return super.get(super.type.generated_offsets[2]) as number;
  }
  public set_allocated_ratio(v: number) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_remained_bytes(): bigint | number {
    return super.get(super.type.generated_offsets[3]) as bigint | number;
  }
  public set_remained_bytes(v: bigint | number) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_remained_ratio(): number {
    return super.get(super.type.generated_offsets[4]) as number;
  }
  public set_remained_ratio(v: number) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_used_bytes(): bigint | number {
    return super.get(super.type.generated_offsets[5]) as bigint | number;
  }
  public set_used_bytes(v: bigint | number) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_used_ratio(): number {
    return super.get(super.type.generated_offsets[6]) as number;
  }
  public set_used_ratio(v: number) {
    super.set(super.type.generated_offsets[6], v);
  }
  public get_available_bytes(): bigint | number {
    return super.get(super.type.generated_offsets[7]) as bigint | number;
  }
  public set_available_bytes(v: bigint | number) {
    super.set(super.type.generated_offsets[7], v);
  }
  public get_available_ratio(): number {
    return super.get(super.type.generated_offsets[8]) as number;
  }
  public set_available_ratio(v: number) {
    super.set(super.type.generated_offsets[8], v);
  }
  create(abi: Abi, capacity_bytes: bigint | number, allocated_bytes: bigint | number, allocated_ratio: number, remained_bytes: bigint | number, remained_ratio: number, used_bytes: bigint | number, used_ratio: number, available_bytes: bigint | number, available_ratio: number): StoreStat {
    return new StoreStat(abi.libs_by_name.get(std.name)!.mapped[33], capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio);
  }
}

export class TaskInfo extends GCObject {
  static readonly _type = 'runtime::TaskInfo';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_id(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_id(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_parent(): bigint | number | null {
    return super.get(super.type.generated_offsets[1]) as bigint | number | null;
  }
  public set_parent(v: bigint | number | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_mod(): string {
    return super.get(super.type.generated_offsets[2]) as string;
  }
  public set_mod(v: string) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_fun(): string {
    return super.get(super.type.generated_offsets[3]) as string;
  }
  public set_fun(v: string) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_params(): string {
    return super.get(super.type.generated_offsets[4]) as string;
  }
  public set_params(v: string) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_progress(): number {
    return super.get(super.type.generated_offsets[5]) as number;
  }
  public set_progress(v: number) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_remaining(): std_n.core.duration | null {
    return super.get(super.type.generated_offsets[6]) as std_n.core.duration | null;
  }
  public set_remaining(v: std_n.core.duration | null) {
    super.set(super.type.generated_offsets[6], v);
  }
  public get_creation(): std_n.core.time {
    return super.get(super.type.generated_offsets[7]) as std_n.core.time;
  }
  public set_creation(v: std_n.core.time) {
    super.set(super.type.generated_offsets[7], v);
  }
  public get_start(): std_n.core.time | null {
    return super.get(super.type.generated_offsets[8]) as std_n.core.time | null;
  }
  public set_start(v: std_n.core.time | null) {
    super.set(super.type.generated_offsets[8], v);
  }
  public get_duration(): std_n.core.duration | null {
    return super.get(super.type.generated_offsets[9]) as std_n.core.duration | null;
  }
  public set_duration(v: std_n.core.duration | null) {
    super.set(super.type.generated_offsets[9], v);
  }
  public get_status(): std.runtime.TaskStatus {
    return super.get(super.type.generated_offsets[10]) as std.runtime.TaskStatus;
  }
  public set_status(v: std.runtime.TaskStatus) {
    super.set(super.type.generated_offsets[10], v);
  }
  public get_result_size(): bigint | number {
    return super.get(super.type.generated_offsets[11]) as bigint | number;
  }
  public set_result_size(v: bigint | number) {
    super.set(super.type.generated_offsets[11], v);
  }
  public get_log_size(): bigint | number {
    return super.get(super.type.generated_offsets[12]) as bigint | number;
  }
  public set_log_size(v: bigint | number) {
    super.set(super.type.generated_offsets[12], v);
  }
  public get_sub_waiting(): bigint | number {
    return super.get(super.type.generated_offsets[13]) as bigint | number;
  }
  public set_sub_waiting(v: bigint | number) {
    super.set(super.type.generated_offsets[13], v);
  }
  public get_sub_tasks_all(): bigint | number {
    return super.get(super.type.generated_offsets[14]) as bigint | number;
  }
  public set_sub_tasks_all(v: bigint | number) {
    super.set(super.type.generated_offsets[14], v);
  }
  public get_user(): bigint | number {
    return super.get(super.type.generated_offsets[15]) as bigint | number;
  }
  public set_user(v: bigint | number) {
    super.set(super.type.generated_offsets[15], v);
  }
  create(abi: Abi, id: bigint | number, parent: bigint | number | null, mod: string, fun: string, params: string, progress: number, remaining: std_n.core.duration | null, creation: std_n.core.time, start: std_n.core.time | null, duration: std_n.core.duration | null, status: std.runtime.TaskStatus, result_size: bigint | number, log_size: bigint | number, sub_waiting: bigint | number, sub_tasks_all: bigint | number, user: bigint | number): TaskInfo {
    return new TaskInfo(abi.libs_by_name.get(std.name)!.mapped[34], id, parent, mod, fun, params, progress, remaining, creation, start, duration, status, result_size, log_size, sub_waiting, sub_tasks_all, user);
  }
}

export class UserGroupPolicy extends GCObject {
  static readonly _type = 'runtime::UserGroupPolicy';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_group_id(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_group_id(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_type(): std.runtime.UserGroupPolicyType {
    return super.get(super.type.generated_offsets[1]) as std.runtime.UserGroupPolicyType;
  }
  public set_type(v: std.runtime.UserGroupPolicyType) {
    super.set(super.type.generated_offsets[1], v);
  }
  create(abi: Abi, group_id: bigint | number, type: std.runtime.UserGroupPolicyType): UserGroupPolicy {
    return new UserGroupPolicy(abi.libs_by_name.get(std.name)!.mapped[35], group_id, type);
  }
}

export class UserGroupPolicyType extends GCEnum {
  static readonly _type = 'runtime::UserGroupPolicyType';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static read(abi: Abi): std.runtime.UserGroupPolicyType {
    const t = abi.libs_by_name.get(std.name)!.mapped[36];
    return t.enum_values![t.generated_offsets[0]] as std.runtime.UserGroupPolicyType;
  }
  public static write(abi: Abi): std.runtime.UserGroupPolicyType {
    const t = abi.libs_by_name.get(std.name)!.mapped[36];
    return t.enum_values![t.generated_offsets[1]] as std.runtime.UserGroupPolicyType;
  }
  public static execute(abi: Abi): std.runtime.UserGroupPolicyType {
    const t = abi.libs_by_name.get(std.name)!.mapped[36];
    return t.enum_values![t.generated_offsets[2]] as std.runtime.UserGroupPolicyType;
  }
  create(abi: Abi): UserGroupPolicyType {
    return new UserGroupPolicyType(abi.libs_by_name.get(std.name)!.mapped[36]);
  }
}

export class UserGroup extends GCObject {
  static readonly _type = 'runtime::UserGroup';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_id(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_id(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_name(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_activated(): boolean {
    return super.get(super.type.generated_offsets[2]) as boolean;
  }
  public set_activated(v: boolean) {
    super.set(super.type.generated_offsets[2], v);
  }
  async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<std.runtime.SecurityEntity>> {
    return greycat.call('runtime::SecurityEntity::all', undefined, signal);
  }
  async set_(greycat: GreyCat, entity: std.runtime.SecurityEntity, signal?: AbortSignal): Promise<bigint | number | null> {
    return greycat.call('runtime::SecurityEntity::set_', [entity], signal);
  }
  create(abi: Abi, id: bigint | number, name: string, activated: boolean): UserGroup {
    return new UserGroup(abi.libs_by_name.get(std.name)!.mapped[37], id, name, activated);
  }
}

export class PeriodicTask extends GCObject {
  static readonly _type = 'runtime::PeriodicTask';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_user_id(): bigint | number {
    return super.get(super.type.generated_offsets[1]) as bigint | number;
  }
  public set_user_id(v: bigint | number) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_args(): string | null {
    return super.get(super.type.generated_offsets[2]) as string | null;
  }
  public set_args(v: string | null) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_start(): std_n.core.time {
    return super.get(super.type.generated_offsets[3]) as std_n.core.time;
  }
  public set_start(v: std_n.core.time) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_every(): std_n.core.duration {
    return super.get(super.type.generated_offsets[4]) as std_n.core.duration;
  }
  public set_every(v: std_n.core.duration) {
    super.set(super.type.generated_offsets[4], v);
  }
  async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<std.runtime.PeriodicTask>> {
    return greycat.call('runtime::PeriodicTask::all', undefined, signal);
  }
  async set_(greycat: GreyCat, tasks: Array<std.runtime.PeriodicTask>, signal?: AbortSignal): Promise<unknown> {
    return greycat.call('runtime::PeriodicTask::set_', [tasks], signal);
  }
  create(abi: Abi, name: string, user_id: bigint | number, args: string | null, start: std_n.core.time, every: std_n.core.duration): PeriodicTask {
    return new PeriodicTask(abi.libs_by_name.get(std.name)!.mapped[38], name, user_id, args, start, every);
  }
}

export class User extends GCObject {
  static readonly _type = 'runtime::User';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_id(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_id(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_name(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_activated(): boolean {
    return super.get(super.type.generated_offsets[2]) as boolean;
  }
  public set_activated(v: boolean) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_full_name(): string | null {
    return super.get(super.type.generated_offsets[3]) as string | null;
  }
  public set_full_name(v: string | null) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_email(): string | null {
    return super.get(super.type.generated_offsets[4]) as string | null;
  }
  public set_email(v: string | null) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_role(): string | null {
    return super.get(super.type.generated_offsets[5]) as string | null;
  }
  public set_role(v: string | null) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_permissions_flags(): bigint | number | null {
    return super.get(super.type.generated_offsets[6]) as bigint | number | null;
  }
  public set_permissions_flags(v: bigint | number | null) {
    super.set(super.type.generated_offsets[6], v);
  }
  public get_groups(): Array<std.runtime.UserGroupPolicy> | null {
    return super.get(super.type.generated_offsets[7]) as Array<std.runtime.UserGroupPolicy> | null;
  }
  public set_groups(v: Array<std.runtime.UserGroupPolicy> | null) {
    super.set(super.type.generated_offsets[7], v);
  }
  public get_groups_flags(): bigint | number | null {
    return super.get(super.type.generated_offsets[8]) as bigint | number | null;
  }
  public set_groups_flags(v: bigint | number | null) {
    super.set(super.type.generated_offsets[8], v);
  }
  public get_external(): boolean {
    return super.get(super.type.generated_offsets[9]) as boolean;
  }
  public set_external(v: boolean) {
    super.set(super.type.generated_offsets[9], v);
  }
  async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<std.runtime.SecurityEntity>> {
    return greycat.call('runtime::SecurityEntity::all', undefined, signal);
  }
  async set_(greycat: GreyCat, entity: std.runtime.SecurityEntity, signal?: AbortSignal): Promise<bigint | number | null> {
    return greycat.call('runtime::SecurityEntity::set_', [entity], signal);
  }
  async login(greycat: GreyCat, credentials: string, use_cookie: boolean, signal?: AbortSignal): Promise<string> {
    return greycat.call('runtime::User::login', [credentials, use_cookie], signal);
  }
  async tokenLogin(greycat: GreyCat, token: string, use_cookie: boolean, signal?: AbortSignal): Promise<string> {
    return greycat.call('runtime::User::tokenLogin', [token, use_cookie], signal);
  }
  async renew(greycat: GreyCat, use_cookie: boolean, signal?: AbortSignal): Promise<string> {
    return greycat.call('runtime::User::renew', [use_cookie], signal);
  }
  async logout(greycat: GreyCat, signal?: AbortSignal): Promise<unknown> {
    return greycat.call('runtime::User::logout', undefined, signal);
  }
  async current(greycat: GreyCat, signal?: AbortSignal): Promise<bigint | number> {
    return greycat.call('runtime::User::current', undefined, signal);
  }
  async me(greycat: GreyCat, signal?: AbortSignal): Promise<std.runtime.User> {
    return greycat.call('runtime::User::me', undefined, signal);
  }
  async permissions(greycat: GreyCat, signal?: AbortSignal): Promise<Array<string>> {
    return greycat.call('runtime::User::permissions', undefined, signal);
  }
  async setPassword(greycat: GreyCat, name: string, pass: string, signal?: AbortSignal): Promise<boolean> {
    return greycat.call('runtime::User::setPassword', [name, pass], signal);
  }
  async getToken(greycat: GreyCat, id: bigint | number, signal?: AbortSignal): Promise<string> {
    return greycat.call('runtime::User::getToken', [id], signal);
  }
  create(abi: Abi, id: bigint | number, name: string, activated: boolean, full_name: string | null, email: string | null, role: string | null, permissions_flags: bigint | number | null, groups: Array<std.runtime.UserGroupPolicy> | null, groups_flags: bigint | number | null, external: boolean): User {
    return new User(abi.libs_by_name.get(std.name)!.mapped[39], id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external);
  }
}

export class UserCredential extends GCObject {
  static readonly _type = 'runtime::UserCredential';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_offset(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_offset(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_pass(): string | null {
    return super.get(super.type.generated_offsets[1]) as string | null;
  }
  public set_pass(v: string | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  create(abi: Abi, offset: bigint | number, pass: string | null): UserCredential {
    return new UserCredential(abi.libs_by_name.get(std.name)!.mapped[40], offset, pass);
  }
}

export class System extends GCObject {
  static readonly _type = 'runtime::System';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): System {
    return new System(abi.libs_by_name.get(std.name)!.mapped[41]);
  }
}

export class Task extends GCObject {
  static readonly _type = 'runtime::Task';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  async running(greycat: GreyCat, signal?: AbortSignal): Promise<Array<std.runtime.TaskInfo>> {
    return greycat.call('runtime::Task::running', undefined, signal);
  }
  async history(greycat: GreyCat, offset: bigint | number, max: bigint | number, signal?: AbortSignal): Promise<Array<std.runtime.TaskInfo>> {
    return greycat.call('runtime::Task::history', [offset, max], signal);
  }
  async cancel(greycat: GreyCat, task_id: bigint | number, signal?: AbortSignal): Promise<boolean> {
    return greycat.call('runtime::Task::cancel', [task_id], signal);
  }
  async info(greycat: GreyCat, user_id: bigint | number, task_id: bigint | number, signal?: AbortSignal): Promise<std.runtime.TaskInfo | null> {
    return greycat.call('runtime::Task::info', [user_id, task_id], signal);
  }
  create(abi: Abi): Task {
    return new Task(abi.libs_by_name.get(std.name)!.mapped[42]);
  }
}

export class SecurityFields extends GCObject {
  static readonly _type = 'runtime::SecurityFields';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_email(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_email(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_name(): string | null {
    return super.get(super.type.generated_offsets[1]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_first_name(): string | null {
    return super.get(super.type.generated_offsets[2]) as string | null;
  }
  public set_first_name(v: string | null) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_last_name(): string | null {
    return super.get(super.type.generated_offsets[3]) as string | null;
  }
  public set_last_name(v: string | null) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_roles(): Map<string, string> | null {
    return super.get(super.type.generated_offsets[4]) as Map<string, string> | null;
  }
  public set_roles(v: Map<string, string> | null) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_groups(): Map<string, string> | null {
    return super.get(super.type.generated_offsets[5]) as Map<string, string> | null;
  }
  public set_groups(v: Map<string, string> | null) {
    super.set(super.type.generated_offsets[5], v);
  }
  async set_(greycat: GreyCat, f: std.runtime.SecurityFields, signal?: AbortSignal): Promise<unknown> {
    return greycat.call('runtime::SecurityFields::set_', [f], signal);
  }
  async get_(greycat: GreyCat, signal?: AbortSignal): Promise<std.runtime.SecurityFields | null> {
    return greycat.call('runtime::SecurityFields::get_', undefined, signal);
  }
  create(abi: Abi, email: string | null, name: string | null, first_name: string | null, last_name: string | null, roles: Map<string, string> | null, groups: Map<string, string> | null): SecurityFields {
    return new SecurityFields(abi.libs_by_name.get(std.name)!.mapped[43], email, name, first_name, last_name, roles, groups);
  }
}

export class TaskStatus extends GCEnum {
  static readonly _type = 'runtime::TaskStatus';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static empty(abi: Abi): std.runtime.TaskStatus {
    const t = abi.libs_by_name.get(std.name)!.mapped[44];
    return t.enum_values![t.generated_offsets[0]] as std.runtime.TaskStatus;
  }
  public static waiting(abi: Abi): std.runtime.TaskStatus {
    const t = abi.libs_by_name.get(std.name)!.mapped[44];
    return t.enum_values![t.generated_offsets[1]] as std.runtime.TaskStatus;
  }
  public static running(abi: Abi): std.runtime.TaskStatus {
    const t = abi.libs_by_name.get(std.name)!.mapped[44];
    return t.enum_values![t.generated_offsets[2]] as std.runtime.TaskStatus;
  }
  public static cancelled(abi: Abi): std.runtime.TaskStatus {
    const t = abi.libs_by_name.get(std.name)!.mapped[44];
    return t.enum_values![t.generated_offsets[3]] as std.runtime.TaskStatus;
  }
  public static error(abi: Abi): std.runtime.TaskStatus {
    const t = abi.libs_by_name.get(std.name)!.mapped[44];
    return t.enum_values![t.generated_offsets[4]] as std.runtime.TaskStatus;
  }
  public static ended(abi: Abi): std.runtime.TaskStatus {
    const t = abi.libs_by_name.get(std.name)!.mapped[44];
    return t.enum_values![t.generated_offsets[5]] as std.runtime.TaskStatus;
  }
  create(abi: Abi): TaskStatus {
    return new TaskStatus(abi.libs_by_name.get(std.name)!.mapped[44]);
  }
}

export class Runtime extends GCObject {
  static readonly _type = 'runtime::Runtime';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  async info(greycat: GreyCat, signal?: AbortSignal): Promise<std.runtime.RuntimeInfo> {
    return greycat.call('runtime::Runtime::info', undefined, signal);
  }
  async abi(greycat: GreyCat, signal?: AbortSignal): Promise<unknown> {
    return greycat.call('runtime::Runtime::abi', undefined, signal);
  }
  create(abi: Abi): Runtime {
    return new Runtime(abi.libs_by_name.get(std.name)!.mapped[45]);
  }
}

export class SecurityPolicy extends GCObject {
  static readonly _type = 'runtime::SecurityPolicy';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_entities(): Array<std.runtime.SecurityEntity> {
    return super.get(super.type.generated_offsets[0]) as Array<std.runtime.SecurityEntity>;
  }
  public set_entities(v: Array<std.runtime.SecurityEntity>) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_credentials(): Map<string, std.runtime.UserCredential> {
    return super.get(super.type.generated_offsets[1]) as Map<string, std.runtime.UserCredential>;
  }
  public set_credentials(v: Map<string, std.runtime.UserCredential>) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_roles(): Map<string, std.runtime.UserRole> {
    return super.get(super.type.generated_offsets[2]) as Map<string, std.runtime.UserRole>;
  }
  public set_roles(v: Map<string, std.runtime.UserRole>) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_fields(): std.runtime.SecurityFields | null {
    return super.get(super.type.generated_offsets[3]) as std.runtime.SecurityFields | null;
  }
  public set_fields(v: std.runtime.SecurityFields | null) {
    super.set(super.type.generated_offsets[3], v);
  }
  async permissions(greycat: GreyCat, signal?: AbortSignal): Promise<Array<string>> {
    return greycat.call('runtime::SecurityPolicy::permissions', undefined, signal);
  }
  create(abi: Abi, entities: Array<std.runtime.SecurityEntity>, credentials: Map<string, std.runtime.UserCredential>, roles: Map<string, std.runtime.UserRole>, fields: std.runtime.SecurityFields | null): SecurityPolicy {
    return new SecurityPolicy(abi.libs_by_name.get(std.name)!.mapped[46], entities, credentials, roles, fields);
  }
}

export class OpenIDConnect extends GCObject {
  static readonly _type = 'runtime::OpenIDConnect';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_url(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_url(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_clientId(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_clientId(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  async config(greycat: GreyCat, signal?: AbortSignal): Promise<std.runtime.OpenIDConnect | null> {
    return greycat.call('runtime::OpenIDConnect::config', undefined, signal);
  }
  create(abi: Abi, url: string, clientId: string): OpenIDConnect {
    return new OpenIDConnect(abi.libs_by_name.get(std.name)!.mapped[47], url, clientId);
  }
}

export class Licence extends GCObject {
  static readonly _type = 'runtime::Licence';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_start(): std_n.core.time {
    return super.get(super.type.generated_offsets[1]) as std_n.core.time;
  }
  public set_start(v: std_n.core.time) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_end(): std_n.core.time {
    return super.get(super.type.generated_offsets[2]) as std_n.core.time;
  }
  public set_end(v: std_n.core.time) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_company(): string | null {
    return super.get(super.type.generated_offsets[3]) as string | null;
  }
  public set_company(v: string | null) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_max_workers(): bigint | number {
    return super.get(super.type.generated_offsets[4]) as bigint | number;
  }
  public set_max_workers(v: bigint | number) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_max_memory(): bigint | number {
    return super.get(super.type.generated_offsets[5]) as bigint | number;
  }
  public set_max_memory(v: bigint | number) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_max_store(): bigint | number {
    return super.get(super.type.generated_offsets[6]) as bigint | number;
  }
  public set_max_store(v: bigint | number) {
    super.set(super.type.generated_offsets[6], v);
  }
  public get_extra_1(): bigint | number | null {
    return super.get(super.type.generated_offsets[7]) as bigint | number | null;
  }
  public set_extra_1(v: bigint | number | null) {
    super.set(super.type.generated_offsets[7], v);
  }
  public get_extra_2(): bigint | number | null {
    return super.get(super.type.generated_offsets[8]) as bigint | number | null;
  }
  public set_extra_2(v: bigint | number | null) {
    super.set(super.type.generated_offsets[8], v);
  }
  public get_extra_3(): bigint | number | null {
    return super.get(super.type.generated_offsets[9]) as bigint | number | null;
  }
  public set_extra_3(v: bigint | number | null) {
    super.set(super.type.generated_offsets[9], v);
  }
  public get_extra_4(): bigint | number | null {
    return super.get(super.type.generated_offsets[10]) as bigint | number | null;
  }
  public set_extra_4(v: bigint | number | null) {
    super.set(super.type.generated_offsets[10], v);
  }
  create(abi: Abi, name: string | null, start: std_n.core.time, end: std_n.core.time, company: string | null, max_workers: bigint | number, max_memory: bigint | number, max_store: bigint | number, extra_1: bigint | number | null, extra_2: bigint | number | null, extra_3: bigint | number | null, extra_4: bigint | number | null): Licence {
    return new Licence(abi.libs_by_name.get(std.name)!.mapped[48], name, start, end, company, max_workers, max_memory, max_store, extra_1, extra_2, extra_3, extra_4);
  }
}

