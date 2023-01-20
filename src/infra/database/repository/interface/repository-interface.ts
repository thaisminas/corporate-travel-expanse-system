
export interface RepositoryInterface {
    add: (data: any) => Promise<any>
    find: (data: any) => Promise<any>
    findAll: (data: any) => Promise<any>
    delete: (data: any) => Promise<any>
    update: (data: any) => Promise<any>
}
