import { createStackNavigator } from "react-navigation";
import ThoughtScreen from "./ThoughtScreen";
import {
  THOUGHT_SCREEN,
  DISTORTION_SCREEN,
  CHALLENGE_SCREEN,
  ALTERNATIVE_SCREEN,
  FINISHED_SCREEN,
  FEELING_SCREEN,
  FOLLOW_UP_REQUEST_SCREEN,
  FOLLOW_UP_FEELING_SCREEN,
  FOLLOW_UP_FEELING_REVIEW_SCREEN,
  FOLLOW_UP_NOTE_SCREEN,
  FEEDBACK_SCREEN,
  FEEDBACK_LEAVE_REVIEW,
} from "./screens";
import ChallengeScreen from "./ChallengeScreen";
import DistortionScreen from "./DistortionScreen";
import AlternativeScreen from "./AlternativeScreen";
import FinishedScreen from "./FinishedScreen";
import FeelingScreen from "./FeelingScreen";
import FollowUpRequestScreen from "./followups/FollowUpRequestScreen";
import FollowUpFeelingScreen from "./followups/FollowUpFeelingScreen";
import FollowUpFeelingReviewScreen from "./followups/FollowUpFeelingReviewScreen";
import FollowUpNoteScreen from "./followups/FollowUpNoteScreen";
import FeedbackScreen from "./androidFeedback/FeedbackScreen";
import LeaveReview from "./androidFeedback/LeaveAReview";

export default createStackNavigator(
  {
    [THOUGHT_SCREEN]: ThoughtScreen,
    [DISTORTION_SCREEN]: DistortionScreen,
    [CHALLENGE_SCREEN]: ChallengeScreen,
    [ALTERNATIVE_SCREEN]: AlternativeScreen,
    [FINISHED_SCREEN]: FinishedScreen,
    [FEELING_SCREEN]: FeelingScreen,
    [FOLLOW_UP_REQUEST_SCREEN]: FollowUpRequestScreen,
    [FOLLOW_UP_FEELING_SCREEN]: FollowUpFeelingScreen,
    [FOLLOW_UP_FEELING_REVIEW_SCREEN]: FollowUpFeelingReviewScreen,
    [FOLLOW_UP_NOTE_SCREEN]: FollowUpNoteScreen,
    [FEEDBACK_SCREEN]: FeedbackScreen,
    [FEEDBACK_LEAVE_REVIEW]: LeaveReview,
  },
  {
    initialRouteName: THOUGHT_SCREEN,
  }
);
