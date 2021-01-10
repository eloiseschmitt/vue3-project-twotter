<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">
        @{{ user.username }} - {{ fullName }}
        <!--             <button @click="followUser">
                Follow
                </button> -->
      </h1>
      <div class="user-profil_admin-badge" v-if="user.isAdmin">
          Admin
      </div>
      <div class="user-profile_follower-count">
        <strong>Followers: </strong> {{ followers }}
      </div>
      <form class="user-profile_create-twoot">
          <label for="newTwoot"><strong>New Twoot</strong></label>
          <textarea name="" id="newTwoot" cols="30" rows="4"></textarea>
      </form>
    </div>
    <div class="user-profile_twoots-wrapper">
        <TwootItem 
            v-for="twoot in user.twoots" 
            :key="twoot.id" 
            :username="user.username" 
            :twoot="twoot" 
            @favourite="toggleFavourite"
        />
    </div>
  </div>
</template>

<script>
import TwootItem from './TwootItem'

export default {
  name: "UserProfile",
  components: { TwootItem },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "kikikoko",
        firstname: "kiki",
        lastname: "koko",
        email: "kiki@free.fr",
        isAdmin: true,
        twoots: [
            {
                id: 1,
                content: "twotter is amazing"
            },
            {
                id: 2,
                content: "Don't forget to subscribe"
            }
        ]
      },
    };
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower !`);
      }
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstname} ${this.user.lastname}`;
    }
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavourite(id) {
        console.log(`Favourited Twoot ${id}`)
    }
  },
  mounted() {
    this.followUser();
  }
};
</script>

<style>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;
}

.user-profile_user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}

.user-profil_admin-badge {
    background: purple;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
}

h1 {
    margin: 0;
}

.user-profile_twoots-wrapper {
    display: grid;
    grid-gap: 10px;
}

.user-profile_create-twoot {
    border-top: 1px solid #DFE3E8;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
}
</style>