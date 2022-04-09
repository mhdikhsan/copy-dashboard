import { KeyIcon, PresentationChartLineIcon } from "@heroicons/react/outline";
import { DocumentAddIcon, ChartBarIcon } from "@heroicons/react/outline";
import { CalendarIcon, ExclamationCircleIcon } from "@heroicons/react/solid";

export const navigation = [
  { name: "Usage", href: "/", icon: PresentationChartLineIcon },
  { name: "Key", href: "/key", icon: KeyIcon },
];

export const severityOptions = [
  "Normal",
  "Quite Busy",
  "Busy",
  "Very Busy",
  "Extremely Busy",
];

export const incidentTypes = {
  planned: [
    "Long Term Construction (Impacting to Traffic Flow)",
    "Short Term Road Works",
    "Events - Farmer Market",
    "Events - Sports",
    "Events - Public Ceremonies",
    "Crowd of People",
    "Road Restriction - Closed",
    "Road Restriction - Contra Flow",
    "Other",
  ],
  unplanned: [
    "Vehicle Accident",
    "Vehicle Fire",
    "Road Hazard - Obstacle on The Road",
    "Temporary Slippery Road",
    "Road Hazard - Vehicle Stops at Road Side",
    "Animal Cross The Road",
    "Natural Incident - Flood",
    "Natural Incident - Water Stagnan",
    "Natural Incident - Landslides",
    "Natural Incident - Low Visibility (Fog/Haze)",
    "Exceptional Weather Conditions",
    "Traffic Light Not Working",
    "Wrong Way Driver",
    "Other",
  ],
};

export const timeRelatedField = [
  {
    name: "incident_time_start_date",
    type: "date",
    label: "Incident Start Date",
  },
  {
    name: "incident_time_start_time",
    type: "time",
    label: "Incident Start Time",
  },
  {
    name: "incident_time_end_date",
    type: "date",
    label: "Incident End Date",
  },
  {
    name: "incident_time_end_time",
    type: "time",
    label: "Incident End Time",
  },
];

export const detailTextField = [
  {
    name: "duration",
    label: "Duration (minutes)",
  },
  {
    name: "number_road_crossing",
    label: "Number Road Crossing",
  },
  {
    name: "lanes_blocked",
    label: "Lanes Blocked",
    placeholder: "number,number",
  },
  {
    name: "heading_directionally",
    label: "Heading Directionally",
  },
  {
    name: "road_name",
    label: "Road Name",
  },
  {
    name: "coordinate",
    label: "Coordinate",
    placeholder: "Latitude, Longitude",
  },
  {
    name: "poi_marker",
    label: "POI Marker",
  },
  {
    name: "source",
    label: "Source",
  },
];

export const directusUrl = "/panel";

export const userNavigation = [
  // { name: "Your Profile" },
  // { name: "Settings" },
  { name: "Sign out" },
];

export const tokenKey = "pointraffic_token";

export const tabs = [
  { name: "planned", icon: CalendarIcon },
  { name: "unplanned", icon: ExclamationCircleIcon },
];

export const accidentStatus = [
  {
    value: "Just Happened",
  },
  {
    value: "Still Going On",
  },
  {
    value: "More Than 1 Hour",
  },
  {
    value: "More Than 2 Hours",
  },
];

export const stats = [
  {
    name: "Total Event",
  },
  {
    name: "Average Daily",
  },
  {
    name: "Highest Daily",
  },
];
