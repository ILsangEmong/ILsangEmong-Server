export interface TeamCreateDto {
    name: string;
    startTime: Date;
    endTime: Date;
    inviteCode?: string;
}
