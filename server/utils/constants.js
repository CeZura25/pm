
const PROJECT_STATUS = {
    ON_TRACK:'on track',
    AT_RISK:'at risk',
    OFF_TRACK:'off track',
    ON_HOLD:'on hold',
    DONE:'done'
}

const PROJECT_SORT_BY ={
    NEWEST_FIRST : 'newest',
    OLDEST_FIRST : 'oldest',
    ASCENDING : 'a-z',
    DESCENDING: 'z-a'
}

const TASK_STATUS = {
    IN_PROGRESS:'in progress',
    TO_CHANGE:'request for change',
    APPROVED:'approved',
    DONE:'done',
    CANCELLED:'cancelled'
}

const TASK_SORT_BY ={
    NEWEST_FIRST : 'newest',
    OLDEST_FIRST : 'oldest',
    ASCENDING : 'a-z',
    DESCENDING: 'z-a'
}
const TASK_PRIORITY ={
    TOP : 1,
    MID : 2,
    LOW : 3,
}
const USER_SORT_BY ={
    NEWEST_FIRST : 'newest',
    OLDEST_FIRST : 'oldest',
    ASCENDING : 'a-z',
    DESCENDING: 'z-a'
}
const USER_ROLE ={
    ADMIN : 'admin',
    USER : 'user',
}

module.exports = {
    PROJECT_STATUS,
    PROJECT_SORT_BY,
    TASK_SORT_BY,
    TASK_STATUS,
    TASK_PRIORITY,
    USER_SORT_BY,
    USER_ROLE
}