let handleMemberJoined = async (MemberId) => {
    console.log('A new member has joined', MemberId)
}

let addMemberToDom = async (MemberId) => {


    let membersWrapper = document.getElementById('member__list')
    let memberItem =
        `<div class="member__wrapper" id="member__${MemberId}__wrapper">
            <span class="green__icon"></span>
            <p class="member_name">${MemberId}</p>
        </div>`


        membersWrapper.insertAdjacentHTML('beforeend', memberItem)
}

let handleMemberLeft = async (MemberId) => {
    removeMemberFromDom(MemberId)

}

let removeMemberFromDom = async (MemberId) =>{
    let membersWrapper = document.getElementById(`member__${MemberId}__wrapper`)
    membersWrapper.remove();
}


// and obvo we would want other participants to also see all the members joined on their screen
let getMembers = async() => {
    let members = await channel.getMembers()

    for (i =0; members.length > i; i++){
        addMemberToDom(members[i]);

    }
}

let leaveChannel = async () => {
    await channel.leave();
    await rtmClient.logout();
}


window.addEventListener('beforeunload', leaveChannel)