import { Inngest } from "inngest";
import { connect } from "mongoose";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest Functions to save user data to a database
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk',
    },
    {event: 'clerk/user.created'},
    async ({ event }) => {
        const {id, first_name, last_name, image_url} = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name+ ' ' +last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.create(userData)
    }

)
// Inngest Fuctiom to update user data in database
export const syncUserdation = inngest.createFunction(
    {
        id: 'delete-user-with-clerk'
    },
    {event: 'clerk/user.deleted'},
    async ({ event }) => {
        const {id} = event.data;

        await connectDB()
        await User.findByIdAndDelete({ _id: id })
    }
)